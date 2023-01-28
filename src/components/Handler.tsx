import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonContainer from '../ui/CommonContainer';
import CenterContainer from '../ui/CenterContainer';
import Spinner from '../ui/Spinner';

const Handler = () => {
  return (
    <CenterContainer>
      <Spinner />
    </CenterContainer>
  );
};

export default Handler;

const styles = StyleSheet.create({});
