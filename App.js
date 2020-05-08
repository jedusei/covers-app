import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneScreen from './screens/PhoneScreen';
import VerificationScreen from './screens/VerificationScreen';
import GeneralInfoScreen from './screens/GeneralInfoScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="GeneralInfoScreen" component={GeneralInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}