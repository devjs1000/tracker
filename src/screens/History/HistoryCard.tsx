import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {MiniTimeDisplay} from './MiniTimeDisplay';
import {getDb, updateDb} from '../../helpers/db';
import {keys} from '../../constants/core';

export const HistoryCard = ({
  item,
  defaultIsOpen,
  refresh,
}: HistoryCardProps) => {
  const time = item?.time?.current - item?.time?.initial;
  const [open, setOpen] = useState(defaultIsOpen);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleDelete = async () => {
    try {
      const data = await getDb(keys.data);
      const newData = data.filter(
        (item: any) => item.time.initial !== item.time.initial,
      );
      await updateDb(keys.data, newData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.taskContainer}>
      <Pressable onPress={toggleOpen}>
        <Text numberOfLines={1} style={styles.title}>
          {item?.task?.title}fhdsjkfhkdjshfkjdhfjkhsdkfhsdkhfjkdshfkjdhfkahfsdhf
        </Text>
      </Pressable>
      {open && (
        <>
          <Text style={styles.description}>{item?.task?.description}</Text>
          <View style={styles.actions}>
            <Pressable onPress={handleDelete}>
              <Text style={styles.delete}>Delete</Text>
            </Pressable>
          </View>
        </>
      )}
      <MiniTimeDisplay time={time} />
    </View>
  );
};
interface HistoryCardProps {
  item: any;
  defaultIsOpen: boolean;
  refresh: () => void;
}
