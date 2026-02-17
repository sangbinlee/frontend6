// navigation/StackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/user/LoginScreen";
import MenuScreen from "../screens/user/MenuScreen";
import OrderScreen from "../screens/user/OrderScreen";
import OrderStatusScreen from "../screens/user/OrderStatusScreen";
import ReviewScreen from "../screens/user/ReviewScreen";

 




const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* // user  로그인, 메뉴 조회, 주문, 주문 상태 확인, 리뷰 작성 */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
}
