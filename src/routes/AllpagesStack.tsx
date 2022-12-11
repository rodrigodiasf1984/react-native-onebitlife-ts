import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppExplanation from '~/screens/AppExplanation';
import HabitPage from '~/screens/HabitPage/inxex';
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
        <Stack.Screen name="HabitPage" component={HabitPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllPages;
