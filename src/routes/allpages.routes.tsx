import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from '~/screens/start';

const Stack = createNativeStackNavigator();

function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllPages;

const styles = StyleSheet.create({});
