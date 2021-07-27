import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    content:{       
        backgroundColor:'#BFBA6F',
        justifyContent: 'center',
        alignItems:'center',
        height:600,
    },

    footer:{
        height:80,
        backgroundColor:'#CCF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',       
    },

    footer2:{
        height:60,
        backgroundColor:'#CCF',
        paddingHorizontal: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },

    resultado:{
        fontSize:30,
        fontWeight:"bold",
    },

    tituloFooter:{
        fontSize:20,
        fontWeight:"bold",
    },

    header:{
        height:150,
        backgroundColor: '#595245',
        justifyContent:'center',
        alignItems:'center'
        
    },
    textHeader:{
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:30
    },
    textHeader1:{
        color:'white',
        fontWeight:"bold",
        fontSize:20,
        alignItems:'center',
    },

    imagem:{
        
        resizeMode:'stretch',
        height:100,
    },

    btn:{
        flex:0.8,
        margin:10,
        padding:0, 
        
    },


    input:{
        paddingTop:30,
    },

    box:{
        padding:10,
        backgroundColor:'#CCF',
        margin:10,
    },
    btns:{
        width:"80%",
        flexDirection:'row',

        
    }
})