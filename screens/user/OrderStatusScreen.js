// OrderStatusScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../../api';

export default function OrderStatusScreen({ route, navigation }) {
  const { orderId } = route.params;
  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/orders/${orderId}`);
        setOrder(res.data.order);
        setItems(res.data.items);
      } catch (err) {
        alert('주문 조회 실패: ' + err.response.data.error);
      }
    };
    fetchOrder();
  }, [orderId]);

  return (
    <View style={{ padding: 20 }}>
      {order ? (
        <>
          <Text>주문번호: {order.id}</Text>
          <Text>상태: {order.status}</Text>
          <Text>주문 시간: {order.created_at}</Text>
          <Text style={{ marginTop: 10 }}>주문 내역:</Text>
          {items.map((item) => (
            <Text key={item.id}>메뉴ID {item.menu_id} - 수량 {item.quantity}</Text>
          ))}
          <Button title="메뉴로 돌아가기" onPress={() => navigation.navigate('Menu')} />
        </>
      ) : (
        <Text>주문 정보를 불러오는 중...</Text>
      )}
    </View>
  );
}
