import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CenterContainer = ({children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default CenterContainer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
