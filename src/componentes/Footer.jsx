import React from 'react';
import{View, Text } from 'react-native';
import{styles} from '../style/style';


export default function Footer(){
    return(
        <View>      
            <View style={styles.footer}>
                
                <Text style = {styles.tituloFooter} >Calc Tech</Text>
                
            </View>
            <View style={styles.footer2}>
                <Text>BCW3 SoulCode: </Text> 
                <Text>Dev. Vagner Bruno </Text>
            </View>
        </View>
    )
}


