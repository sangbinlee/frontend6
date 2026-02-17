// MenuScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import api from '../../api';

export default function MenuScreen({ navigation }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const res = await api.get('/menus');
      setMenus(res.data);
    };
    fetchMenus();
  }, []);

  return (
    <View>
      <FlatList
        data={menus}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Text>{item.name} - {item.price}원</Text>
            <Button title="주문하기" onPress={() => navigation.navigate('Order', { menu: item })} />
          </View>
        )}
      />
    </View>
  );
}
