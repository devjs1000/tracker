import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../ui/Input';
import CenterContainer from '../../ui/CenterContainer';
import storage from '@react-native-async-storage/async-storage';
import {keys} from '../../constants/core';

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

  const statusText = workStatus ? 'Stop' : 'Start';
  const handlePress = async () => {
    let active: any = (await storage.getItem(keys.active)) || null;
    active = JSON.parse(active);
    if (!workStatus) {
      setIsOpened(true);
    } else {
      const data = (await storage.getItem(keys.data)) || '[]';
      let parsedData = JSON.parse(data);
      parsedData[active.date]?.forEach((item: any) => {
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
      await updateDb(keys.data, parsedData);
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
    const data = (await storage.getItem(keys.data)) || '[]';
    let parsedData = JSON.parse(data);

    if (Array.isArray(parsedData)) parsedData = {};
    const isDateExist = parsedData[dateKey];
    if (isDateExist) {
      parsedData[dateKey].push({
        title,
        description,
        time: workTime,
        id: timeKey,
      });
    } else {
      parsedData[dateKey] = [
        {
          title,
          description,
          time: workTime,
          id: timeKey,
        },
      ];
    }
    updateDb(keys.data, parsedData);
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
  const updateDb = async (key: string, data: any) => {
    try {
      await storage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  const dbSync = async () => {
    const active: any = (await storage.getItem(keys.active)) || '{}';
    const parsedActive = JSON.parse(active);
    console.log(parsedActive);
    if (parsedActive.status) {
      setWorkStatus(true);
      const data = (await storage.getItem(keys.data)) || '{}';
      const parsedData = JSON.parse(data);

      const activeDay = parsedData[parsedActive.date];
    
      const activeTask = activeDay?.find(
        (item: any) => item.id === parsedActive.time,
      );
      console.log({
        activeTask,
      });
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
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleSave = () => {
    addTitleAndDescription();
    setIsOpened(false);
    setWorkStatus(true);
  };
  return (
    <CenterContainer>
      <Modal visible={isOpened}>
        <CenterContainer>
          <Input placeholder="Title" value={title} onChangeText={setTitle} />
          <Input
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.spaceBetween}>
            <TouchableOpacity
              onPress={handleClose}
              style={[styles.close, styles.groupButton]}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
            <Pressable
              onPress={handleSave}
              style={[styles.save, styles.groupButton]}>
              <Text style={styles.text}>Save</Text>
            </Pressable>
          </View>
        </CenterContainer>
      </Modal>

      <View>
        <Pressable onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.text}>{statusText}</Text>
          </View>
        </Pressable>
        {workStatus && (
          <>
            <Text style={styles.timer}>
              {parseInt(`${timerTime / 60 / 60}`)} :{' '}
              {parseInt(`${timerTime / 60}`)} : {parseInt(`${timerTime % 60}`)}
            </Text>
          </>
        )}
      </View>
      {workStatus && (
        <>
          <View style={styles.about}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </>
      )}
    </CenterContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F55050',
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 100,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  timer: {
    fontSize: 20,
    color: '#rgba(0,0,0,0.5)',
    textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
  about: {
    marginVertical: 10,
    width: '90%',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',

    padding: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    width: 300,
  },
  groupButton: {
    flexGrow: 1,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    padding: 10,
  },
  close: {
    backgroundColor: '#F55050',
  },
  save: {
    backgroundColor: 'green',
  },
});
