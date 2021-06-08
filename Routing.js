import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import HospitalScreen from './HospitalScreen';
import Filters from './Filters';

const AppStack = createStackNavigator();

export default () => {
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="Home" Component={App} />
      <AppStack.Screen name="HospitalScreen" Component={HospitalScreen} />
      <AppStack.Screen name="Filters" Component={Filters} />
    </AppStack.Navigator>
  </NavigationContainer>;
};
