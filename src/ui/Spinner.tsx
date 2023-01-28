import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Spinner = () => {
  const uri: string =
    'https://media.wired.com/photos/592722c1af95806129f51b71/master/pass/MIT-Web-Loading.jpg';
  return (
    <Image
      source={{
        uri,
      }}
      style={styles.spinner}
    />
  );
};

export default Spinner;


const styles = StyleSheet.create({
    spinner: {
        width: 100,
        height: 100,
        borderRadius: 50,
        
    },
});