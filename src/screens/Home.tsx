import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Lampada from "../components/Lampada";


export default function Home() {
    return(
        <View style={homeStyle.container}>
            <StatusBar style="light"/>
            <Header/>
            <Lampada/>
            <Text style={homeStyle.text}>Hello World</Text>
        </View>
    )
}


const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text:{
      color:'yellow',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center'
  
    }
  });