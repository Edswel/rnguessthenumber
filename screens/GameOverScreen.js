import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!!!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.jpg')} />
            </View>
            <Text>AI used X tries to guess the number Y!</Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
});