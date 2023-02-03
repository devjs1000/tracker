import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TaskButton from './TaskButton';
import TaskDisplay from './TaskDisplay';

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <TaskButton />
        <TaskDisplay />
      </View>
    </View>
  );
};

export default Home;
