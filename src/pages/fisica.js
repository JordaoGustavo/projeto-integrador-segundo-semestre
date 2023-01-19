import React, {Component} from 'react';

import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{
    render(){
        const{navigate} = this.props.navigation;
        return(
            <View style={[style.container,style.div]}>
                <Text style={style.header}>Física</Text>
                <ScrollView style={style.container} >
                    <View style={style.containerBotaos}>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 9})} ><Text style={style.texto}>Velocidade Média</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 10})} ><Text style={style.texto}>Movimento Uniforme</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 11})} ><Text style={style.texto}>Toricelli</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 12})} ><Text style={style.texto}>Queda Livre</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 13})} ><Text style={style.texto}>Erros Probabilisticos</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 14})} ><Text style={style.texto}>Forças</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 26})} ><Text style={style.texto}>Lançamento Horizontal</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 27})} ><Text style={style.texto}>Lançamento Oblíqou</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 28})} ><Text style={style.texto}>Força Gravitacional</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 29})} ><Text style={style.texto}>Calor Sensivel</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 30})} ><Text style={style.texto}>Lançamento Vertical</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 31})} ><Text style={style.texto}>Velocidade Instantânea</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 32})} ><Text style={style.texto}>Movimento Uniforme Variado</Text></TouchableOpacity>
                        <TouchableOpacity style={style.botao} onPress={() => navigate('contas',{id: 35})} ><Text style={style.texto}>Velocidade</Text></TouchableOpacity>
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
        backgroundColor:'#6666ff',
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
