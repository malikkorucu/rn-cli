import { StyleSheet } from "react-native"
import { color, font } from '@theme'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginVertical: 5
    },
    input: {
        fontSize: 16,
        color: color.dark
    },
    errorInput: {
        color: 'red'
    },
    errorContainer: {
        borderColor: 'red'
    },
})

export default styles;