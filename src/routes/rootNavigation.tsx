import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InitialPage from '../pages/IntitialPage/Initial.page';
import { setTopLevelNavigator } from './navigations';
import Loginpage from '../pages/LoginPage/Login.page';

interface Props { }

const RootNavigation = (props: Props) => {
  const RootStack = createStackNavigator();
 
  return (
    <NavigationContainer ref={setTopLevelNavigator} >
      <RootStack.Navigator screenOptions={
        {headerShown:false}
      }>
      <RootStack.Screen name="InitialPage" component={InitialPage} />
      <RootStack.Screen name="Loginpage" component={Loginpage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
