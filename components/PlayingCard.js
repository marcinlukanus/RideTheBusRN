import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayingCard = () => {
    return (
        <View >
            <Image 
                style={styles.playingCard}
                source={{ 
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/209px-Card_back_06.svg.png'
                }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    playingCard: {
        height: 200, 
        width: 130,
        marginRight: 20
    },
})

export default PlayingCard;
