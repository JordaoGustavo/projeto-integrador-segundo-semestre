import React, {Component} from 'react';

import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <View style={[style.container,style.div]} > 
                 <Text style={style.header}>Projeto Integrador</Text>
                 <Text style={style.Texto}>My Subjects é um aplicativo criado com a intenção de ajudar os alunos que estão no ensino medio, disponibilizando algumas materias e suas explicações.</Text>
                 <Text style={[style.Texto,{fontWeight:"bold"}]}>Grupo:</Text>
                 <View style={style.Grupo}>
                    <Text style={style.Texto}>Fernanda Fernandes Silva </Text>
                    <Text style={style.Texto}>Felipe Alexandre Baptista </Text>
                    <Text style={style.Texto}>Gustavo Jordão </Text>
                    <Text style={style.Texto}>Gustavo Lopes Selin </Text>
                    <Text style={style.Texto}>Vinicius Silva de Oliveira </Text>
                 </View>
                 

            </View>
           
        );
    }
}
const style = StyleSheet.create({
    div:{
        marginTop:Dimensions.get('screen').height/10-10,
      },
      container: {
        flex:1,
          flexDirection:'row',
          flexWrap:'wrap',
      },
    header:{
        fontWeight:'800',
        fontSize:40,
        marginLeft:10
    },
    Texto:{
        fontSize: 20,
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        textAlign: 'justify',
        marginBottom:10,
        fontWeight:'300',
        fontSize:20
      },
      Grupo:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
      }
})
