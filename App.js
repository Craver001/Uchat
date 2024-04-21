import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigator/NavigatorElement';
import LoginScreenUI from './Screen/loginScreenUI';

export default function App() {

  const isAuth = true ;
  return (
    <NavigationContainer>
      {isAuth && <Main/>}
      {!isAuth && <LoginScreenUI/> }
      {/* <Main /> */}
    </NavigationContainer>
  );
}
