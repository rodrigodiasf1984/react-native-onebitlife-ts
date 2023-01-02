import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppExplanation from '~/screens/AppExplanation';
import Habit from '~/screens/Habit';
import Home from '~/screens/Home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Habit" component={Habit} />
        <Stack.Screen name="AppExplanation" component={AppExplanation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
