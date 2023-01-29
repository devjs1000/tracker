import React, {useEffect, useState} from 'react';
import CenterContainer from '../../ui/CenterContainer';
import storage from '@react-native-async-storage/async-storage';
import {keys} from '../../constants/core';
import {AddTitleAndDescription} from './AddTitleAndDescription';
import {StartAndStopButton} from './StartAndStopButton';
import {Timer} from './Timer';
import {AboutTask} from './AboutTask';
import {getDb, updateDb} from '../../helpers/db';

const Home = () => {
  const [workStatus, setWorkStatus] = useState(false);
  const [workTime, setWorkTime] = useState({
    initial: new Date().getTime(),
    current: new Date().getTime(),
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const dateKey = new Date().toLocaleDateString();
  const timeKey = new Date().toLocaleTimeString();

  const handlePress = async () => {
    let active: any = await getDb(keys.active)
    console.log('active', active);
    if (!workStatus) {
      setIsOpened(true);
    } else {
      const data:any = await getDb(keys.data) || {};

    
      data[active.date]?.forEach((item: any) => {
        if (item.id === active?.time) {
          item.time = workTime;
        }
      });

      await updateDb(keys.active, {
        status: false,
        time: null,
        date: null,
      });
      await updateDb(keys.time, workTime);
      await updateDb(keys.data, data);
      setWorkStatus(false);
      setTitle('');
      setDescription('');
      setWorkTime(prev => ({
        initial: new Date().getTime(),
        current: new Date().getTime(),
      }));
    }
  };

  const addTitleAndDescription = async () => {
    const data:any =await getDb(keys.data) || {};
   
    const isDateExist = data[dateKey];
    if (isDateExist) {
      data[dateKey].push({
        title,
        description,
        time: workTime,
        id: timeKey,
      });
    } else {
      data[dateKey] = [
        {
          title,
          description,
          time: workTime,
          id: timeKey,
        },
      ];
    }
    updateDb(keys.data, data);
    updateDb(keys.active, {
      status: true,
      time: timeKey,
      date: dateKey,
    });
    setIsOpened(false);
    setWorkStatus(true);
    setWorkTime(prev => ({
      initial: new Date().getTime(),
      current: new Date().getTime(),
    }));
  };

  const timerTime = (workTime.current - workTime.initial) / 1000;

  const dbSync = async () => {
    const active: any = await getDb(keys.active);
    console.log('active', active);
    if (active && active?.status) {
      setWorkStatus(true);
      const data:any = await getDb(keys.data) || {};
      const activeDay = data[active?.date];
      const activeTask = activeDay?.find(
        (item: any) => item.id === active.time,
      );
      if (activeTask) {
        setWorkTime(activeTask.time);
        setTitle(activeTask.title);
        setDescription(activeTask.description);
      }
    }
  };

  useEffect(() => {
    dbSync();
    if (workStatus) {
      const interval = setInterval(() => {
        setWorkTime(prev => ({
          initial: prev.initial,
          current: new Date().getTime(),
        }));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [workStatus]);

  const handleClose = () => setIsOpened(false);

  const handleSave = () => {
    addTitleAndDescription();
    setIsOpened(false);
    setWorkStatus(true);
  };
  return (
    <CenterContainer>
      <AddTitleAndDescription
        isOpened={isOpened}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleClose={handleClose}
        handleSave={handleSave}
      />
      <StartAndStopButton handlePress={handlePress} workStatus={workStatus} />
      <Timer visible={workStatus} timerTime={timerTime} />

      <AboutTask
        title={title}
        description={description}
        workStatus={workStatus}
      />
    </CenterContainer>
  );
};

export default Home;
