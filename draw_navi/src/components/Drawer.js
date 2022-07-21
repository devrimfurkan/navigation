import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NotificationsScreen from '../Screens/NotificationsScreen';
import HomeScreen from '../Screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return(
    <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
