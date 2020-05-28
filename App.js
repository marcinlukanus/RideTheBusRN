/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
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
      <View style={styles.container}>
        <Header />
		<View style={{ width: 200 }}>
			<Button
				title="Draw Cards"
				color="#5cb85c"
			/>
			<Button
				title="Rules"
				color="#495057"
			/>
		</View>
      </View>
	</>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#22303f'
	}
});

export default App;
