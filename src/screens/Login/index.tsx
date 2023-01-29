import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CenterContainer from '../../ui/CenterContainer';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import {keys} from '../../constants/core';
import {useDispatch} from 'react-redux';
import {login} from '../../states/process.slice';
import {compare, encrypt} from '../../helpers/encrypt';
import { getDb, updateDb } from '../../helpers/db';

const Login = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [actionType, setActionType] = useState('login');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (actionType === 'register') {
      const usr = {
        name: user.name,
        password: encrypt(user.password),
      };
      await updateDb(keys.profile, usr);
      dispatch(login(usr));
    } else if (actionType === 'login') {
      console.log('user', [
        user.password,
        profile.password,
      ] )
      const isValid = compare(user.password, profile.password);
      if (isValid) {
        dispatch(login(profile));
      } else {
        Alert.alert('Invalid password');
      }
    } else {
      Alert.alert('App Error');
    }
  };

  const checkProfile = async () => {
    const usr = await getDb(keys.profile);
    console.log('usr', usr);
    if (usr) {
      setActionType('login');
      setProfile(usr);
    } else {
      setActionType('register');
    }
  };
  console.log('profile', profile);

  useEffect(() => {
    checkProfile();
  }, []);

  const handleChange = (name: string) => (value: string) => {
    setUser({...user, [name]: value});
  };

  return (
    <CenterContainer>
      <View>
        {actionType === 'register' ? (
          <Input placeholder="Your Name" onChangeText={handleChange('name')} />
        ) : (
          <Text style={styles.text}>Welcome back, {profile?.name}</Text>
        )}
        <Input
          placeholder="Your Password"
          type="password"
          onChangeText={handleChange('password')}
        />
        <Button onPress={handleLogin}>{actionType}</Button>
      </View>
    </CenterContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default Login;
