import {View, Text} from 'react-native';
import React from 'react';
import store from '../states/store';
import {Provider} from 'react-redux';

const Redux = ({children}: ReduxProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Redux;

interface ReduxProps {
  children: React.ReactNode;
}
