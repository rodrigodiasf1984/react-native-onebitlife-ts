import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppExplanation from '~/screens/AppExplanation';
import HabitPage from '~/screens/HabitPage/inxex';
import Home from '~/screens/Home';
import StartScreen from '~/screens/Start';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HabitPage" component={HabitPage} />
        <Stack.Screen name="AppExplanation" component={AppExplanation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
