import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {getDb} from '../../helpers/db';
import {keys} from '../../constants/core';
import {TimeDisplay} from '../Home/TimeDisplay';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {HistoryCard} from './HistoryCard';

const History = () => {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const res = (await getDb(keys.data)) || [];
    setData(res);
  };

  const focused = useIsFocused();
  useEffect(() => {
    fetchData();
  }, [focused]);

  const dataKeys = Object.keys(data).reverse();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {dataKeys.map((item: any, i: number) => {
          return (
            <DateCard
              refresh={fetchData}
              data={data}
              item={item}
              key={i}
              defaultIsOpen={i == 0}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default History;

export const DateCard = ({
  data,
  item,
  defaultIsOpen = false,
  refresh,
}: DateCardProps) => {
  const [open, setOpen] = useState(defaultIsOpen);
  const handleToggle = () => {
    setOpen(!open);
  };

  const noOfTasks = data[item]?.length;
  return (
    <View style={styles.dateContainer}>
      <View style={styles.dateTitle}>
        <Pressable onPress={handleToggle}>
          <Text style={styles.dateText}>{item}</Text>
        </Pressable>
        {noOfTasks > 0 && !open && (
          <Text style={styles.badge}>{noOfTasks}</Text>
        )}
      </View>
      {open &&
        data[item]?.map((item: any, j: number) => {
          return (
            <HistoryCard
              refresh={refresh}
              defaultIsOpen={defaultIsOpen}
              item={item}
              key={j}
            />
          );
        })}
    </View>
  );
};

interface DateCardProps {
  data: any;
  item: any;
  defaultIsOpen?: boolean;
  refresh: () => void;
}
