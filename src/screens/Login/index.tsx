import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CenterContainer from '../../ui/CenterContainer';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import {keys} from '../../constants/core';
import storage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../states/process.slice';

const Login = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [actionType, setActionType] = useState('login');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const usr = (await storage.getItem(keys.users)) || '[]';
    const parsedUsr = JSON.parse(usr);
    let isUser;
    if (actionType === 'register') isUser = true;
    else isUser = profile.password === user.password;

    if (actionType === 'register' && isUser) {
      await storage.setItem(keys.profile, JSON.stringify(user));
      dispatch(login(user));
    } else if (actionType === 'login' && isUser) dispatch(login(profile));
    else Alert.alert('User not found');
  };

  const checkProfile = async () => {
    const usr = await storage.getItem(keys.profile);
    console.log(usr);
    if (usr) {
      setActionType('login');
      setProfile(JSON.parse(usr));
    } else {
      setActionType('register');
    }
  };

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
        ) : <Text style={styles.text}>
            Welcome back, {profile?.name}
            </Text>}
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
