import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppExplanation from '~/screens/AppExplanation';
import Habit from '~/screens/Habit/inxex';
import Home from '~/screens/Home';
import StartScreen from '~/screens/Start';

const Stack = createNativeStackNavigator();

function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="AppExplanation" component={AppExplanation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Habit" component={Habit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllPages;
