import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({...rest}: InputProps) => {
  return (
    <View>
      <TextInput  placeholderTextColor={'gray'}  {...rest} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    marginHorizontal:"auto",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
    display: 'flex',
    color: 'black',
  
  },
});

interface InputProps {
  [key: string]: any;
}
