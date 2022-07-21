import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{tabBarBadge: 3}} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}