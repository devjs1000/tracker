import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {getDb} from '../../helpers/db';
import {keys} from '../../constants/core';
import {TimeDisplay} from '../Home/TimeDisplay';
import { useFocusEffect } from '@react-navigation/native';
import { MiniTimeDisplay } from './MiniTimeDisplay';

const History = () => {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const res = (await getDb(keys.data)) || {};
    setData(res);
  };

  useFocusEffect(()=>{
    fetchData()
  })

  const dataKeys = Object.keys(data);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {dataKeys.map((item: any, i: number) => {
          return (
            <View style={styles.dateContainer} key={i}>
              <Text style={styles.dateText}>{item}</Text>
              {data[item]?.map((item: any, j: number) => {
                const time = item?.time?.current - item?.time?.initial;
                return (
                  <View style={styles.taskContainer} key={j}>
                    <Text style={styles.title}>{item?.task?.title}</Text>
                    <Text style={styles.description}>
                      {item?.task?.description}
                    </Text>
                    <View style={styles.timeContainer}>
                      <MiniTimeDisplay time={time} />
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default History;
