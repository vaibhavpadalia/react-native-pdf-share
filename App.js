import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainPage from './src/Components/MainPage';

export default App = StackNavigator({
  MainPage: { screen: MainPage }
})
