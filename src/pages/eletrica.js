import React, {Component} from 'react';

import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';



export default class Main extends Component{
    render(){
        const{navigate} = this.props.navigation;
        return(
            <View style={[style.container,style.div]}> 
                <Text style={style.header}>Elétrica</Text>
                <ScrollView style={style.container} >
                    <View style={style.containerBotaos}>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 15})} ><Text style={style.texto}>Resistores</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 16})} ><Text style={style.texto}>Energia</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 17})} ><Text style={style.texto}>Força Eletromotriz</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 18})} ><Text style={style.texto}>Tensão</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 19})} ><Text style={style.texto}>Carga elétrica</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 20})} ><Text style={style.texto}>Intensidade</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 21})} ><Text style={style.texto}>Primeira lei de Ohm</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 22})} ><Text style={style.texto}>Segunda lei de Ohm</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 23})} ><Text style={style.texto}>Potência</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 24})} ><Text style={style.texto}>Resistência</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 25})} ><Text style={style.texto}>Conversão Y Delta</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    div:{
        marginTop:Dimensions.get('screen').height/10-10,
    },
    container:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        
    },
    containerBotaos:{
        flexWrap:'wrap',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    botao:{
        width: Dimensions.get('window').width -25,
        height:170,
        backgroundColor:'#ff8c66',
        margin:7,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:8
    },
    texto:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold',
       
    },
    header:{
        fontWeight:'800',
        fontSize:40,
        marginLeft:10,
        paddingBottom:5
    }
})
