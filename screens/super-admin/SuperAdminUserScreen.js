// SuperAdminUserScreen.js
import React, { useState } from 'react';
import {  View, Text, TextInput, Button } from 'react-native';
import api    from '../../api';



export default function SuperAdminUserScreen() {
  const [form, setForm] = useState({ name: '', email: '', password: '', store_id: '' });

  const createAdmin = async () => {
    try {
      await api.post('/superadmin/users/admin', form);
      alert('매장 관리자 계정 생성 완료');
    } catch (err) {
      alert('계정 생성 실패: ' + err.response.data.error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>수퍼관리자 - 매장 관리자 계정 생성</Text>
      <TextInput placeholder="이름" value={form.name} onChangeText={(t) => setForm({ ...form, name: t })} />
      <TextInput placeholder="이메일" value={form.email} onChangeText={(t) => setForm({ ...form, email: t })} />
      <TextInput placeholder="비밀번호" value={form.password} onChangeText={(t) => setForm({ ...form, password: t })} secureTextEntry />
      <TextInput placeholder="매장 ID" value={form.store_id} onChangeText={(t) => setForm({ ...form, store_id: t })} keyboardType="numeric" />
      <Button title="관리자 계정 생성" onPress={createAdmin} />
    </View>
  );
}
