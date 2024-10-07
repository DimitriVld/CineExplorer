/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appearance, NativeModules} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ListMoviesScreen from './screens/ListMoviesScreen';
import MovieScreen from './screens/MovieScreen';

const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();

function App(): React.JSX.Element {

  if (colorScheme === 'dark') {
    console.log(colorScheme)
  } else {
    console.log(colorScheme)
  }

  useEffect(() => {
    const getDeviceVersion = async () => {
      try {
        const version = await NativeModules.CustomDeviceInfo.getSystemVersion();
        console.log(version);
      } catch (error) {
        console.log(error);
      }
    };

    getDeviceVersion();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="ListMoviesScreen"
          component={ListMoviesScreen}
          options={{title: 'List movies'}}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          options={{title: 'Movie'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
