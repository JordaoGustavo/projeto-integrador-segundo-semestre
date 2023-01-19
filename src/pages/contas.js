import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, Dimensions,ScrollView } from 'react-native';
import { getStatusBarHeight} from 'react-native-status-bar-height';

 import contas from '../js/contas.json'


export default class Main extends Component {
    constructor (props) {
      super(props)
      this.state = {
        id: this.props.navigation.getParam('id')
       }
     }
  render() {
    var conta =  contas.find(item => item.id == this.state.id);
    var img;
    switch(conta.id){
      case "1":
          img = require('../img/Matematica/Mat_Fracoes.png');
          break;
      case "2":
          img = require('../img/Matematica/Mat_ProdutosNotaveis.png');
          break;
      case "3":
          img = require('../img/Matematica/Mat_Fracoes.png');
          break;
      case "4":
          img = require('../img/Matematica/Mat_Bhaskara.png');
          break;
          case "5":
          img = require('../img/Matematica/Mat_Bhaskara.png');
          break;
          case "6":
          img = require('../img/Matematica/Mat_FuncaoPrimeiroGrau.png');
          break;
          case "7":
          img = require('../img/Matematica/Mat_FuncaoSegundoGrau.png');
          break;
          case "8":
          img = require('../img/Matematica/Mat_Pitagoras.png');
          break;
          case "9":
          img = require('../img/Fisica/Fis_VelocidadeMedia.png');
          break;
          case "10":
          img = require('../img/Fisica/Fis_MovimentoUniforme.png');
          break;
          case "11":
          img = require('../img/Fisica/Fis_Toriccelli.png');
          break;
          case "12":
          img = require('../img/Fisica/Fis_QuedaLivre.png');
          break;
          case "13":
          img = require('../img/Fisica/Fis_ErrosProbabilisticos.png');
          break;
          case "14":
          img = require('../img/Fisica/Fis_Forcas.png');
          break;
          case "15":
          img = require('../img/Eletrica/Ele_AssociacaoResistores.png');
          break;
          case "16":
          img = require('../img/Eletrica/Ele_Energia.png');
          break;
          case "17":
          img = require('../img/Eletrica/Ele_ForcaEletromotriz.png');
          break;
          case "18":
          img = require('../img/Eletrica/Ele_Tensao.png');
          break;
          case "19":
          img = require('../img/Eletrica/Ele_CargaEletrica.png');
          break;
          case "20":
          img = require('../img/Eletrica/Ele_IntensidadeCorrenteEletrica.png');
          break;
          case "21":
          img = require('../img/Eletrica/Ele_PrimeiraLeiOhm.png');
          break;
          case "22":
          img = require('../img/Eletrica/Ele_SegundaLeiOhm.png');
          break;
          case "23":
          img = require('../img/Eletrica/Ele_Potencia.png');
          break;
          case "24":
          img = require('../img/Eletrica/Ele_Resistencia.png');
          break;
          case "25":
          img = require('../img/Eletrica/Ele_YDeslta.png');
          break;
          case "26":
          img = require('../img/Fisica/Fis_LancamentoHorizontal.png');
          break;
          case "27":
          img = require('../img/Fisica/Fis_LancamentoObliquo.png');
          break;
          case "28":
          img = require('../img/Fisica/Fis_ForcaGravitacional.png');
          break;
          case "29":
          img = require('../img/Fisica/Fis_CalorSensivel.png');
          break;
          case "30":
          img = require('../img/Fisica/Fis_LancamentoVertical.png');
          break;
          case "31":
          img = require('../img/Fisica/Fis_VelocidadeInstantanea.png');
          break;
          case "32":
          img = require('../img/Fisica/Fis_MovimentoUnormementeVariado.png');
          break;
          case "33":
          img = require('../img/Matematica/Mat_AreaCirculo.png');
          break;
          case "34":
          img = require('../img/Matematica/Mat_AreaParalelogramo.png');
          break;
          case "35":
          img = require('../img/Fisica/Fis_Velocidade.png');
          break;
          case "36":
          img = require('../img/Matematica/Mat_AreaRetangulo.png');
          break;
          case "37":
          img = require('../img/Matematica/Mat_AreaQuadrado.png');
          break;
          case "38":
          img = require('../img/Matematica/Mat_AreaTrapezio.png');
          break;
          case "39":
          img = require('../img/Matematica/Mat_AreaLosango.png');
          break;
          case "40":
          img = require('../img/Matematica/Mat_AreaTriangulo.png');
          break;
          case "41":
          img = require('../img/Matematica/Mat_Porcentagem.png');
          break;
        default:
          img = require('../img/Fisica/Fis_Forcas.png');
          break;
      
    }
    return (
      
      <View style={[style.container,style.div]}>
        
          <Text style={style.header}>{conta.Title}</Text>
        
          <ScrollView style={ style.scroll}>  
          <Text style={style.Texto}>{conta.Explicacao}</Text>
          
          <View style={style.containerImg}>
              <Image style={style.img} source={img}/>
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
  container: {
    flex:1,
    
      flexDirection:'column',
      flexWrap:'wrap',
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
  header:{
    fontWeight:'800',
    fontSize:30,
    marginLeft:10,
    paddingBottom:5
  },
  containerImg:{
    marginTop:5,
    marginLeft:5,
    height:Dimensions.get('screen').height-300,
    width:Dimensions.get('screen').width-10,
    backgroundColor:'#333'
  },
  img:{
    resizeMode: 'contain',
    height:Dimensions.get('screen').height-300,
    width:Dimensions.get('screen').width-10,
    
  },
});
