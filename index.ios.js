/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import AppDelegate from './Class/Basic/AppDelegate'

class FeiNiu extends Component {
  render() {
    return (
      <AppDelegate/>
    );
  }
}

AppRegistry.registerComponent('FeiNiu', () => FeiNiu);
