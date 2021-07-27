import React from 'react';
import{View, Text, StyleSheet, Image } from 'react-native';



export default function Header(){
    return(
        <View style={styles.header}>       
            <View>
                <Text style = {styles.titulo}>Calc Tech</Text> 
            </View>
            <View style ={styles.img}>
                <Image style ={styles.imagem} source={require('./calc.jpg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:40,
        fontWeight:'bold',  
    },
    header:{
        height:100,
        backgroundColor:'#CCF',
        paddingHorizontal: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    img:{
        width:250,
        resizeMode:'contain',
    }
})
