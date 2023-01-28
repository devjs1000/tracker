import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const AboutTask = ({title, description, workStatus}: AboutTaskProps) => {
  if (!workStatus) return null;
  return (
    <View style={styles.about}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
interface AboutTaskProps {
  title: string;
  description: string;
  workStatus: boolean;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
  about: {
    marginVertical: 10,
    width: '90%',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',

    padding: 10,
  },
});
