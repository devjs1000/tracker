import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const Timer = ({timerTime, visible}: TimerProps) => {
  if (!visible) return null;
  const hours = parseInt(`${timerTime / 60 / 60}`);
  const minutes = parseInt(`${timerTime / 60}`);
  const seconds = parseInt(`${timerTime % 60}`);
  const showIfBiggerThanZero = (value: number, text: string) => {
    if (value > 0) {
      return `${value}${text}`;
    }
    return '';
  };
  return (
    <Text style={styles.timer}>
      {showIfBiggerThanZero(hours, 'h : ')}
      {showIfBiggerThanZero(minutes, 'm : ')}
      {showIfBiggerThanZero(seconds, 's')}
    </Text>
  );
};
interface TimerProps {
  timerTime: number;
  visible: boolean;
}

export const styles = StyleSheet.create({
  timer: {
    fontSize: 20,
    color: '#rgba(0,0,0,0.5)',
    textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
  },
});
