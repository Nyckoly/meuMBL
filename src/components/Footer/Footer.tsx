import React from 'react';
import { View, Text  } from 'react-native';

import { FooterStyles } from './FooterStyle';

export function Footer() {
  return (
    <View style={FooterStyles.container}>
        <Text style={FooterStyles.text}>
            XPTO Softwers todos os direitos reservados 
        </Text>
    </View>
  );
}