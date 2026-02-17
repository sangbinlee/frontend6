// AdminMenuScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import api from '../../api';

export default function AdminMenuScreen() {
  const [menus, setMenus] = useState([]);
  const [newMenu, setNewMenu] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const res = await api.get('/menus');
    setMenus(res.data);
  };

  const addMenu = async () => {
    try {
      await api.post('/menus', newMenu);
      alert('메뉴 추가 완료');
      fetchMenus();
    } catch (err) {
      alert('메뉴 추가 실패: ' + err.response.data.error);
    }
  };

  const deleteMenu = async (id) => {
    try {
      await api.delete(`/menus/${id}`);
      alert('메뉴 삭제 완료');
      fetchMenus();
    } catch (err) {
      alert('삭제 실패: ' + err.response.data.error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>관리자 메뉴 관리</Text>
      <TextInput placeholder="메뉴 이름" value={newMenu.name} onChangeText={(t) => setNewMenu({ ...newMenu, name: t })} />
      <TextInput placeholder="가격" value={newMenu.price} onChangeText={(t) => setNewMenu({ ...newMenu, price: t })} keyboardType="numeric" />
      <TextInput placeholder="카테고리" value={newMenu.category} onChangeText={(t) => setNewMenu({ ...newMenu, category: t })} />
      <Button title="메뉴 추가" onPress={addMenu} />

      <FlatList
        data={menus}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.name} - {item.price}원 ({item.category})</Text>
            <Button title="삭제" onPress={() => deleteMenu(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
