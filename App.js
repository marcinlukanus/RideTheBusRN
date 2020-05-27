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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.root}>
        <Header />
      </View>
	</>
  );
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#22303f'
	}
});

export default App;
