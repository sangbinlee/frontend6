// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await api.post('/users/login', { email, password });
      // await AsyncStorage.setItem('token', res.data.token);
      navigation.navigate('Menu');
    } catch (err) {
      alert('로그인 실패: ' + err.response.data.error);
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={login} />
    </View>
  );
}
