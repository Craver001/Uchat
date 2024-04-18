import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../Screen/MainScreen';
import ChatActivityPage from '../Screen/chatActivityPage';
import settings from '../Screen/Settings';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatUI() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Settings" component={settings} />
    </Tab.Navigator>
  );
}

export default function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="chatUI" component={ChatUI} />
      <Stack.Screen name="ChatActivityPage" component={ChatActivityPage} />
    </Stack.Navigator>
  );
}
