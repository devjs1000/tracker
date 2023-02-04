import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export const MiniTimeDisplay = ({time}: TimeDisplayProps) => {
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

const styles = StyleSheet.create({
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
    width: 100,
    height: 30,
    borderRadius: 20,
    position: 'relative',
    top: 5,
    left: 250,
  },
  time: {
    color: '#CD5888',
    fontSize: 16,
    margin: 5,
  },
});
