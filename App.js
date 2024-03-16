import Front_id from './screen/Front_id';
import Back_id from './screen/Back_id';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="idfront" component={Front_id} />
      <Stack.Screen name="idback" component={Back_id} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
