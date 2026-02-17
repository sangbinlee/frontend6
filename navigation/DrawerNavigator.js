// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SuperAdminStoreScreen from '../screens/super-admin/SuperAdminStoreScreen';
import SuperAdminUserScreen from '../screens/super-admin/SuperAdminUserScreen';



const Drawer = createDrawerNavigator();

export default function SuperAdminDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="매장관리" component={SuperAdminStoreScreen} />
      <Drawer.Screen name="관리자계정관리" component={SuperAdminUserScreen} />
    </Drawer.Navigator>
  );
}
