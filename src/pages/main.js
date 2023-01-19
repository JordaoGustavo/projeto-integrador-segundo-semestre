import React, {Component} from 'react';

import { ScrollView , View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{
    render(){
        const{navigate} = this.props.navigation;
        return(
            <View style={style.container}>
                <Text style={style.header}>Matérias</Text>
               
                <View style={style.containerBotaos}>
                    <TouchableOpacity style={[style.botao,style.botaoFisica]} onPress={() => navigate('fisica')} ><Text style={style.texto}>Física <Icon name='superscript' size={26} /></Text></TouchableOpacity>
                    <TouchableOpacity style={[style.botao,style.botaoEletrica]} onPress={() => navigate('eletrica')} ><Text style={style.texto}>Elétrica <Icon name='plug' size={24} /></Text></TouchableOpacity>
                    <TouchableOpacity style={[style.botao,style.botaoMatematica]} onPress={() => navigate('matematica')} ><Text style={style.texto}>Matemática <Icon name='times' size={26} /></Text></TouchableOpacity>
                </View>
                
            </View>

           
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        marginTop:Dimensions.get('screen').height/10-10,
        
    },
    containerBotaos:{
        flexWrap:'wrap',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
    },
    botao:{
        width: Dimensions.get('window').width -25,
        height:170,
        margin:7,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:8
    },
    botaoFisica:{
        backgroundColor:'#6666ff',
    },
    botaoEletrica:{
        backgroundColor: '#ff8c66',
    },
    botaoMatematica:{
        backgroundColor: '#ff6666',
    },
    texto:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
    },
    header:{
        fontWeight:'800',
        fontSize:40,
        marginLeft:10
    }
   
})
