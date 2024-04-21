import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../Screen/MainScreen';



import { Ionicons } from '@expo/vector-icons';
import ChatSettings from '../Screen/Settings';
import ChatScreen from '../Screen/ChatScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatHomeScreen() {
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
      <Stack.Screen name="chatUI" component={ChatHomeScreen} />
      <Stack.Screen name="ChatActivityPage" component={ChatScreen} />
    </Stack.Navigator>
  );
}
