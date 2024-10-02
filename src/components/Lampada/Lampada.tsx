import {Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import lampadaApagada from '../../../assets/lampadaOff.png';
import lampadaAcesa from '../../../assets/lampadaOn.png';
import React, { useState } from 'react';
import {lampadaStyle} from './LampadaStyle';


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
            <Text style={apagada?lampadaStyle.textApagada:lampadaStyle.textAcesa}>
                {apagada?"Apagada":"Acesa"}
            </Text>
        </View>
    )
}