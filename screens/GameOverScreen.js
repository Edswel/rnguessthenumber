import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!!!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.jpg')} />
            </View>
            <Text style={styles.summaryText}>AI used <Text style={styles.highlight}>{roundsNumber}</Text> tries to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Play Again?</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        borderRadius: deviceWidth < 300 ? 75 : 150,
        width: deviceWidth < 300 ? 150 : 300,
        height: deviceWidth < 300 ? 150 : 300,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        color: '#bbb',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: '#fff'
    }
});