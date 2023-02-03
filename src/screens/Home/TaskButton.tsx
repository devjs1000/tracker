import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskButton = ({handlePress, active, time}: TaskButtonProps) => {
  const activeMessage = active ? 'End' : 'Start';
  const timePassed = time?.current - time?.initial;
  const seconds = Math.floor((timePassed / 1000) % 60);
  const minutes = Math.floor((timePassed / 1000 / 60) % 60);
  const hours = Math.floor((timePassed / (1000 * 60 * 60)) % 24);
  const showNonZero = (value: number, suffix: string) => {
    return value > 0 ? <Text style={styles.time}>{value}{suffix}</Text> : '';
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.buttonText}>{activeMessage} Task</Text>
        <View style={styles.timerContainer}>
          {showNonZero(hours, 'h')}
          {showNonZero(minutes, 'm')}
          {showNonZero(seconds, 's')}
        </View>
      </Pressable>
    </View>
  );
};

export default TaskButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  buttonContainer: {
    backgroundColor: '#913175',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: 300,
    minWidth: 300,
    borderRadius: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  time: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 10,
    backgroundColor: '#CD5888',
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 25,
  },
});

interface TaskButtonProps {
  handlePress: () => void;
  active: boolean;
  time: {
    initial: number;
    current: number;
  };
}
