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
    justifyContent: 'space-around',
    backgroundColor: 'rgba(50,50,50,1)',
    width: 'auto',
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  time: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    textAlign: 'left',
  },
});
