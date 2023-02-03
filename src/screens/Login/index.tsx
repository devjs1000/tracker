import {
  Alert,
  Pressable,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import {useDispatch} from 'react-redux';
import {login} from '../../states/process.slice';
import {getDb, updateDb} from '../../helpers/db';
import {keys} from '../../constants/core';
import {BlurView} from '@react-native-community/blur';

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
    } else {
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
  }, []);

  const titleMessage = isRegister ? 'Welcome!' : 'Hello Again!';
  const descriptionMessage = isRegister
    ? 'Welcome to the app'
    : "Welcome back you've been missed!";

  const handleSwitchMode = () => {
    setMode(isRegister ? 'login' : 'register');
  };
  return (
    <ImageBackground
      source={{
        uri: 'https://media3.giphy.com/media/26xBzu2ogAunL19hS/giphy.gif',
      }}
      style={styles.bgImage}>
      <BlurView style={styles.blurView} blurType="dark" blurAmount={30} />
      <View style={styles.container}>
        <Text style={styles.title}>{titleMessage}</Text>
        <Text style={styles.description}>{descriptionMessage}</Text>
        <View>
          {isRegister && (
            <Input placeholder="name" onChangeText={handleChange('name')} />
          )}
          <Input
            secureTextEntry={true}
            placeholder="password"
            onChangeText={handleChange('password')}
          />
          <Button onPress={handleSubmit}>{mode}</Button>
          <Text style={styles.orText}>or</Text>
          <Pressable onPress={handleSwitchMode} style={styles.switchMode}>
            <Text style={styles.switchModeText}>
              {isRegister ? 'Login' : 'Register'}
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
