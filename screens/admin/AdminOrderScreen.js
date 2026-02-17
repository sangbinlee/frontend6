// AdminOrderScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import api from '../../api';

export default function AdminOrderScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await api.get('/orders'); // 관리자용 전체 주문 조회 API 필요
    setOrders(res.data);
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/${id}/status`, { status });
      alert('주문 상태 업데이트 완료');
      fetchOrders();
    } catch (err) {
      alert('업데이트 실패: ' + err.response.data.error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>관리자 주문 관리</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>주문번호: {item.id} | 상태: {item.status}</Text>
            <Button title="조리중" onPress={() => updateStatus(item.id, 'cooking')} />
            <Button title="배달중" onPress={() => updateStatus(item.id, 'delivering')} />
            <Button title="완료" onPress={() => updateStatus(item.id, 'completed')} />
          </View>
        )}
      />
    </View>
  );
}
