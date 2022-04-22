import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import Colors from '../constants/colors';
import InstructionText from '../components/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Input!', 'Pick a number between 1 and 99.', [{
                text: 'Okay', style: 'destructive', onPress: resetInputHandler
            }]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
            <Title>Guessing Numbers</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        color: '#fff',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});