import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Launch from './screens/Launch';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';


const Stack = createStackNavigator();


export default function App() => {
  return (
    <>
    <StatusBar backgroundColor='#EEFCFC' barStyle="default" />

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen options={{ headerShown: false }} name="Launch" component={Launch} />
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: '#EEFCFC'
              },
              headerTitleStyle: {
                color: 'white'
              },
              headerTintColor: "white"
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: '#EEFCFC'
              },
              headerTitleStyle: {
                color: 'white'
              },
              headerTintColor: "white"
            }}
            name="Signin"
            component={Signin}
          />
          <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
    </>
  );
}

