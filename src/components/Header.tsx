import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return (
        <View>
            <Text style={headerStyle.text}>Meu Header</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
      backgroundColor: '#0f0',
      color: '00f',
      fontWeight:'bold',
      fontSize:30,
      alignItems: 'center',
      justifyContent: 'center',
    }
})