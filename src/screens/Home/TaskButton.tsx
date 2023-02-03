import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskButton = () => {
  const [active, setActive] = React.useState(false);

  const activeMessage = active ? 'End' : 'Start';
  const handlePress = () => {
    setActive(!active);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.buttonText}>{activeMessage} Task</Text>
        <View style={styles.timerContainer}>
          <Text style={styles.time}>hh</Text>
          <Text style={styles.time}>mm</Text>
          <Text style={styles.time}>ss</Text>
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
  },
});
