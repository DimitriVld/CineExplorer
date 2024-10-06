/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ListMoviesScreen from './screens/ListMoviesScreen';
import MovieScreen from './screens/MovieScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

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
