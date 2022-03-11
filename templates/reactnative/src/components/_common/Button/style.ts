import { StyleSheet } from "react-native"
import { color, font } from '@theme'

const styles = StyleSheet.create({
    disabled:{
        opacity:0.5
    },    
    container: {
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        fontFamily: font.medium
    }
})

export default styles;