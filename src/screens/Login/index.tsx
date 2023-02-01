import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import {useDispatch} from 'react-redux';
import {login} from '../../states/process.slice';
import {getDb, updateDb} from '../../helpers/db';
import {keys} from '../../constants/core';

const Login = () => {
  const [mode, setMode] = useState('register');
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({
    name: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const updateProfile = async (update = true) => {
    update && (await updateDb(keys.profile, form));
    dispatch(login(form));
  };

  const handleSubmit = async () => {
    isRegister ? await registerUser() : await loginUser();
  };

  const registerUser = async () => {
    await updateProfile();
  };

  const isRegister = mode === 'register';

  const loginUser = async () => {
    const isValid = checkLogin();
    if (isValid) {
      await updateProfile(false);
    }else{
      Alert.alert('Invalid password');
    }
  };

  const checkLogin = () => {
    return user.password === form.password;
  };

  const fetchMode = async () => {
    const profile: any = await getDb(keys.profile);
    if (profile.name && profile.password) {
      setMode('login');
      setUser(profile);
    }
  };

  useEffect(() => {
    fetchMode();
    console.log('user', user);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isRegister && (
          <Input placeholder="name" onChangeText={handleChange('name')} />
        )}
        <Input secureTextEntry={true} placeholder="password" onChangeText={handleChange('password')} />
        <Button onPress={handleSubmit}>{mode}</Button>
      </View>
    </View>
  );
};

export default Login;
