// navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminMenuScreen from '../screens/admin/AdminMenuScreen';
import AdminOrderScreen from '../screens/admin/AdminOrderScreen';

 

const Tab = createBottomTabNavigator();

export default function AdminTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="메뉴관리" component={AdminMenuScreen} />
      <Tab.Screen name="주문관리" component={AdminOrderScreen} />
    </Tab.Navigator>
  );
}
