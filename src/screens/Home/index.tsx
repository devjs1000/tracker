import {ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import TaskButton from './TaskButton';
import TaskDisplay from './TaskDisplay';
import CreateTaskModal from './CreateTaskModal';
import {getDb, updateDb} from '../../helpers/db';
import {keys} from '../../constants/core';

const Home = () => {
  const [active, setActive] = React.useState(false);
  const [time, setTime] = React.useState({
    initial: new Date().getTime(),
    current: new Date().getTime(),
  });
  const [showModal, setShowModal] = React.useState(false);
  const [task, setTask] = React.useState<any>({title: '', description: ''});

  const handlePress = async () => {
    if (active) {
      setActive(false);
      setTask({title: '', description: ''});
      const data = await getDb(keys.data);
      const activeState = await getDb(keys.active);
      const activeDate = data[activeState.dateKey];
      if (activeDate) {
        activeDate.forEach((item: any) => {
          if (item.timeKey === activeState.timeKey) {
            item.time.current = new Date().getTime();
          }
        });
      }
      await updateDb(keys.data, data);
      await updateDb(keys.active, {status: false});
      setTime({initial: new Date().getTime(), current: new Date().getTime()});
    } else {
      setShowModal(true);
    }
  };

  const handleStart = async () => {
    const data = (await getDb(keys.data)) || {};
    const dateKey = new Date().toDateString();
    const timeKey = new Date().getTime();
    const isDateExists = data[dateKey];
    const taskToPush = {
      task,
      time,
      timeKey,
    };
    if (isDateExists) {
      data[dateKey].push(taskToPush);
    } else {
      data[dateKey] = [taskToPush];
    }
    await updateDb(keys.data, data);
    await updateDb(keys.active, {
      status: true,
      timeKey: timeKey,
      dateKey: dateKey,
      time: timeKey,
      task,
    });
    setTime({initial: new Date().getTime(), current: new Date().getTime()});
    setShowModal(false);
    setActive(true);
  };

  const handleChange = (name: string) => (value: string) => {
    setTask({...task, [name]: value});
  };

  const fetchDb = async () => {
    const activeData = await getDb(keys.active);
    if (activeData) {
      const {task, time, status} = activeData;
      status && setActive(true);
      time && setTime({initial: time, current: new Date().getTime()});
      task && setTask(task);
    }
  };

  useEffect(() => {
    fetchDb();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active) {
        console.log('active', active);
        setTime({initial: time.initial, current: new Date().getTime()});
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TaskButton handlePress={handlePress} active={active} time={time} />
          <TaskDisplay task={task} />
          <CreateTaskModal
            showModal={showModal}
            setShowModal={setShowModal}
            handleChange={handleChange}
            handleStart={handleStart}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
