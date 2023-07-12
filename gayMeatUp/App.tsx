import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; // Add this import statement
import HomePage from './src/pages/homePage';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> {/* Wrap your app with the NavigationContainer */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

