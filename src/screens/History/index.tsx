import {Pressable, ScrollView, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {keys} from '../../constants/core';
import Accordion from '../../components/Accordion';
import F5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import { getDb, updateDb } from '../../helpers/db';

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data: any = await getDb(keys.data) || {};
      setData(data);
    };
    getData();
  }, []);

  const deleteDateHistory = async (date: string) => {
    const parsedData:any=data;
    delete parsedData[date];
    await updateDb(keys.data, parsedData);
    setData(parsedData);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object?.keys(data)?.map((dateKey: any, i) => {
          const dateData: any = data[dateKey];

          return (
            <Accordion
              key={i}
              title={dateKey}
              dateData={dateData}
              defaultIsOpen={i === 0}>
              <View key={dateKey} style={styles?.dateContainer}>
                <View style={styles?.horizonal}>
                  <Text style={styles?.date}>{dateKey}</Text>
                  <Pressable
                    onPress={() => deleteDateHistory(dateKey)}
                    style={styles?.deleteButton}>
                    <Text style={styles?.text}>
                      <F5 name="trash" size={20} color="white" />
                    </Text>
                  </Pressable>
                </View>
                {dateData?.map?.((timeData: any, index: number) => {
                  const timerTime =
                    (timeData?.time?.current - timeData?.time?.initial) / 1000;
                  const hr = parseInt(`${timerTime / 60 / 60}`);
                  const min = parseInt(`${timerTime / 60}`);
                  const sec = parseInt(`${timerTime % 60}`);
                  return (
                    <View style={styles.card} key={index}>
                      <Text style={styles.cardDate}>{timeData.id}</Text>
                      <Text style={styles.cardTime}>
                        {hr > 0 ? `${hr} hr ` : ''}
                        {min > 0 ? `${min} min ` : ''}
                        {sec > 0 ? `${sec} sec ` : ''}
                      </Text>
                      <Text style={styles.cardTitle}>{timeData.title}</Text>
                      <Text style={styles.cardDescription}>
                        {timeData.description}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </Accordion>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default History;
