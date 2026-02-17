// ReviewScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import api from '../../api';

export default function ReviewScreen({ route, navigation }) {
  const { menuId } = route.params;
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const submitReview = async () => {
    try {
      await api.post('/reviews', {
        menu_id: menuId,
        rating: parseInt(rating),
        comment
      });
      alert('리뷰가 등록되었습니다!');
      navigation.navigate('Menu');
    } catch (err) {
      alert('리뷰 작성 실패: ' + err.response.data.error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>메뉴 ID: {menuId}</Text>
      <Text>별점 (1~5)</Text>
      <TextInput
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>후기</Text>
      <TextInput
        value={comment}
        onChangeText={setComment}
        multiline
        style={{ borderWidth: 1, marginBottom: 10, height: 100 }}
      />
      <Button title="리뷰 작성" onPress={submitReview} />
    </View>
  );
}
