import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../Screen/MainScreen';
import ChatActivityPage from '../Screen/chatActivityPage';


import { Ionicons } from '@expo/vector-icons';
import ChatSettings from '../Screen/Settings';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatUI() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen}options={{
         headerShown: false,
        tabBarLabel:'chat',
        tabBarIcon:({color, size})=>(
          <Ionicons name="chatbox-outline" size={size} color={color} />
        )
        }}/>
      <Tab.Screen name="Settings" component={ChatSettings}options ={{
        headerShown: false,
        tabBarLabel:'Settings',
        tabBarIcon:({color, size})=>(
          <Ionicons name="settings-outline" size={size} color={color}/>
        )
        }} />
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
