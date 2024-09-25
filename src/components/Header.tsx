import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.text}>Turn On/Off</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        width:"100%",
        height:"40%",
        justifyContent:"center",
        alignItems:'center'
    },
    text: {
      backgroundColor: '#0f0',
      color: '00f',
      fontWeight:'bold',
      fontSize:30,
      alignItems: 'center',
      justifyContent: 'center',
    }
})