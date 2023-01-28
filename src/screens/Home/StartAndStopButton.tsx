import { Pressable, View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const StartAndStopButton = ({ handlePress, workStatus }: StartAndStopButtonProps) => {
  const buttonText = workStatus ? 'Stop' : 'Start';
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};
interface StartAndStopButtonProps {
  handlePress: () => Promise<void>;
  workStatus: boolean;
}


export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F55050',
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 100,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});