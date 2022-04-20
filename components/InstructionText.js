import { Text, StyleSheet } from 'react-native';

function InstructionText({ children }) {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: '#fff',
        fontSize: 18
    }
});