import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Launch from './screens/Launch';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Dashboard from './screens/Dashboard';


const Stack = createStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar backgroundColor=""
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
