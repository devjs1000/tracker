import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskDisplay = ({task}: TaskDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
};

export default TaskDisplay;

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: '100%',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#20262E',
  },
  description: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: '100%',
    height: '100%',
    padding: 20,
  },
});

interface TaskDisplayProps {
  task: {
    title: string;
    description: string;
  };
}
