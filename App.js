/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from  './src/screen/homescreen';
import ScrollScreen from './src/screen/ScrollScreen';
import CategoryScreen from './src/screen/Categories/categoriesScreen'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/Store';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ScrollScreen"  screenOptions={ {headerShown:true}} component={ScrollScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
