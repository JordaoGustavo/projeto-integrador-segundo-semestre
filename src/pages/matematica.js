import React, {Component} from 'react';

import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{
    render(){
        const{navigate} = this.props.navigation;
        return(
            <View style={[style.container,style.div]}>
                <Text style={style.header}>Matemática</Text>
                <ScrollView style={style.container} >
                    <View style={style.containerBotaos}>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 1})} ><Text style={style.texto}>Frações</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 2})} ><Text style={style.texto}>Produtos notáveis</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 3})} ><Text style={style.texto}>Fatoração por diferença</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 4})} ><Text style={style.texto}>Bháskara</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 5})} ><Text style={style.texto}>Função Constante</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 6})} ><Text style={style.texto}>Função do 1º grau</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 7})} ><Text style={style.texto}>Função do 2º grau</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 8})} ><Text style={style.texto}>Pitagoras</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 33})} ><Text style={style.texto}>Area Circulo</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 34})} ><Text style={style.texto}>Area Paralelograma</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 36})} ><Text style={style.texto}>Area Retângulo</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 37})} ><Text style={style.texto}>Area Quadrado</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 38})} ><Text style={style.texto}>Area Trapézio</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 39})} ><Text style={style.texto}>Area Losango</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 40})} ><Text style={style.texto}>Area Triângulo</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 41})} ><Text style={style.texto}>Porcentagem</Text></TouchableOpacity>
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
        backgroundColor:'#ff6666',
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
