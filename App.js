/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import DetailsScreen from "./components/Details";
import Clock from"./components/Clock";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};

const navigator = createStackNavigator(
  {
    Home : Home,
    Details : DetailsScreen,
    clock : Clock
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#45CE30',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }

  },

)
const AppContainerTest = createAppContainer(navigator)

export default class App extends Component {
  render() {
    return (

      <AppContainerTest />
    );
  }
}









