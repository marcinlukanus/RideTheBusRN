import React from 'react';
import { 
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback 
} from 'react-native';

class PlayingCard extends React.Component {
    render() {
        let { cardState, onCardPressed } = this.props
        let { isFlipped, image } = cardState

        let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/209px-Card_back_06.svg.png'
        if(isFlipped)
            imageUrl = image

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={onCardPressed}
                >
                    <Image 
                        style={styles.playingCard}
                        source={{ 
                            uri: imageUrl
                        }} 
                        resizeMode={'contain'}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    playingCard: {
        height: 200, 
        width: 130,
        marginRight: 20
    },
})

export default PlayingCard;
