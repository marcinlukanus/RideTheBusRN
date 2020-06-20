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
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import PlayingCard from './components/PlayingCard';
import helpers from './helpers';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
		<Header />
	
		<View style={styles.buttons}>
			<TouchableOpacity 
				onPress={ () => helpers.startGame() }
				style={styles.drawCardsButton}
			>
				<Text style={styles.buttonText}>
					Draw Cards
				</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				onPress={ () => helpers.rules() }
				style={styles.rulesButton}
			>
				<Text style={styles.buttonText}>
					Rules
				</Text>
			</TouchableOpacity>
		</View>

		<View style={styles.cards}>
			<PlayingCard cardNum={1} />
			<PlayingCard cardNum={2} />
			<PlayingCard cardNum={3} />
			<PlayingCard cardNum={4} />
		</View>
	  </View>
	</>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#22303f',
	},
	cards: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons: {
		flexDirection: 'row',
		width: '100%',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	drawCardsButton: {
		backgroundColor: '#5cb85c',
		padding: 8,
		margin: 10
	},
	rulesButton: {
		backgroundColor: '#495057',
		padding: 8,
		margin: 10
	},
	buttonText: {
		color: 'white'
	},
	logo: {
		width: 66,
		height: 58,
	  },
});

export default App;
