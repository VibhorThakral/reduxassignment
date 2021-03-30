import React from 'react';
import Home from '../components/HomeComponent';
import UpdateItemComponent from '../components/UpdateItemComponent';
import AddItemComponent from '../components/AddItemComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Home}
        keyboardHandlingEnabled
        mode="modal"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="UpdateItemComponent"
          component={UpdateItemComponent}
        />
        <Stack.Screen name="AddItemComponent" component={AddItemComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
