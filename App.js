import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  componentWillMount(){

  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText='My Albums' />

        <AlbumList />
      </View>
    );
  }
}