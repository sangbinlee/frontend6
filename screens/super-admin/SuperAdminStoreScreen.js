// SuperAdminStoreScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import api from '../../api';

export default function SuperAdminStoreScreen() {
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({ name: '', address: '', phone: '' });

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await api.get('/superadmin/stores');
    setStores(res.data);
  };

  const addStore = async () => {
    try {
      await api.post('/superadmin/stores', newStore);
      alert('매장 등록 완료');
      fetchStores();
    } catch (err) {
      alert('매장 등록 실패: ' + err.response.data.error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>수퍼관리자 매장 관리</Text>
      <TextInput placeholder="매장 이름" value={newStore.name} onChangeText={(t) => setNewStore({ ...newStore, name: t })} />
      <TextInput placeholder="주소" value={newStore.address} onChangeText={(t) => setNewStore({ ...newStore, address: t })} />
      <TextInput placeholder="전화번호" value={newStore.phone} onChangeText={(t) => setNewStore({ ...newStore, phone: t })} />
      <Button title="매장 등록" onPress={addStore} />

      <FlatList
        data={stores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.name} - {item.address} ({item.phone})</Text>
          </View>
        )}
      />
    </View>
  );
}
