import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './TaskButton';


export const TimeDisplay = ({ time }: TimeDisplayProps) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  const showNonZero = (value: number, suffix: string) => {
    return value > 0 ? (
      <Text style={styles.time}>
        {value}
        {suffix}
      </Text>
    ) : (
      ''
    );
  };
  return (
    <View style={styles.timerContainer}>
      {showNonZero(hours, 'h')}
      {showNonZero(minutes, 'm')}
      {showNonZero(seconds, 's')}
    </View>
  );
};
interface TimeDisplayProps {
  time: number;
}
