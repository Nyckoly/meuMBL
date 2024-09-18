import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";


export default function Home() {
    return(
        <View style={homeStyle.container}>
            <Header/>
            <Text style={homeStyle.text}>Hello World</Text>
            <StatusBar style="light"/>
        </View>
    )
}


const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'yellow',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center'
  
    }
  });