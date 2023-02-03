import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const History = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>History</Text>
      </View>
    </ScrollView>
  );
};

export default History;
