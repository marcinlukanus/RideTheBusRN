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
  Alert,
} from 'react-native';
import axios from 'axios';

const helpers = {
    flipCard: function(cardNum) {
      Alert.alert('TODO', 'Lorem ipsum');
      // switch(cardNum) {
      //     case 0:
      //         this.cardOneFlipped = true
      //         break
      //     case 1:
      //         this.cardTwoFlipped = true
      //         break
      //     case 2:
      //         this.cardThreeFlipped = true
      //         break
      //     case 3:
      //         this.cardFourFlipped = true
      //         break
      //     default:
      //         break
      // }
    },
    rules: function() {
        Alert.alert(
            'Rules', 
            '1. Pick the color. [RED or BLACK]\n\n' +
            '2. Pick the number. [HIGHER or LOWER or SAME]\n\n' + 
            '3. Pick the range. [INSIDE or OUTSIDE or SAME]\n\n' + 
            '4. Pick the suit.\n    [HEARTS or DIAMONDS or SPADES or CLUBS]'
        );
    },
    startGame: function() {
      axios
        .get('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
        .then(response => {
          Alert.alert('Cards', JSON.stringify(response.data.cards));
        })
        .catch(error => {
          console.log(error)
        })
    }
}

export default helpers;