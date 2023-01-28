import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({children, ...others}: ButtonProps) => {
  return (
    <Pressable style={styles.button} {...others}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

interface ButtonProps {
  children: any;
  [key: string]: any;
}
