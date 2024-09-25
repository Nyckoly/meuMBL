import {Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import lampadaApagada from '../../assets/lampadaOff.png';
import lampadaAcesa from '../../assets/lampadaOn.png';
import React, { useState } from 'react';


export default function Lampada(){

    const [apagada, setApagada] = useState(true);

    function turnOnOff(){
        setApagada(!apagada);
    }

    return(
        <View>
            <TouchableOpacity onPress={turnOnOff}>
                <Image source={apagada?lampadaApagada:lampadaAcesa} style={lampadaStyle.image}/>
            </TouchableOpacity>
            <Text style={lampadaStyle.text}>
                Clique na lampada para acendê-la ou apagá-la
            </Text>
        </View>
    )
}

const lampadaStyle = StyleSheet.create({
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
    text:{
        color: '#777',
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center'
    }
})