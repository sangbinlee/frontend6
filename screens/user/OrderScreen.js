// OrderScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import api from '../../api';

export default function OrderScreen({ route, navigation }) {
  const { menu } = route.params;

  const placeOrder = async () => {
    try {
      const res = await api.post('/orders', {
        user_id: 1, // 실제 앱에서는 로그인된 사용자 ID 사용
        items: [{ menu_id: menu.id, quantity: 1 }]
      });
      alert('주문 완료! 주문번호: ' + res.data.orderId);
      navigation.navigate('Menu');
    } catch (err) {
      alert('주문 실패: ' + err.response.data.error);
    }
  };

  return (
    <View>
      <Text>주문할 메뉴: {menu.name}</Text>
      <Button title="주문하기" onPress={placeOrder} />
    </View>
  );
}
