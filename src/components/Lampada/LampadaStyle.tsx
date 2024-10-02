import {StyleSheet} from "react-native"

export const lampadaStyle = StyleSheet.create({
    container:{
        margin:16,
        gap:16,
        alignItems:'center'
    },
    image:{
        width:200,
        height: 200,
        alignSelf: 'center'
    },
    textApagada:{
        color: 'red',
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center'
    },
    textAcesa:{
        color: 'green',
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center'
    }
})