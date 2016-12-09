// Index.android.js - place code in here for Android!!!!

// Import a library to help create a Component
// unique names because of library
import React from 'react';
import { View, AppRegistry } from 'react-native';
// could be duplicate names from different relateive directory
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
