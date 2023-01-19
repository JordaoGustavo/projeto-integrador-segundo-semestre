import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import Main from './pages/main';
import Matematica from './pages/matematica';
import Fisica from './pages/fisica';
import Eletrica from './pages/eletrica';
import Sobre from './pages/sobre';
import Contas from './pages/contas';
const tabNavigation = createBottomTabNavigator({
    Materias:{
        screen: Main,
        navigationOptions:{
          tabBarIcon:({tintColor}) =>{
            <Icon name='home' color={tintColor} size={15} />
          }
        }
      },
      Sobre:{
          screen: Sobre,
      }
},{
    tabBarOptions: {
        inactiveTintColor:'#333',
        labelStyle: {
          fontSize: 15,fontWeight:'bold',
        },
      }
});
const AppNavigator = createStackNavigator(
    { 
        Main:{
          screen: tabNavigation, 
          navigationOptions: () => ({
            
          }), 
        },
        matematica:{
          screen: Matematica,
          
        },
        eletrica:{
          screen: Eletrica,
          
        },
        fisica:{
          screen: Fisica,
          
        },
        contas:{
          screen: Contas,
           
        } 
    },{
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        header: null,
        
      },
    }

    
    
  );


export default createAppContainer(AppNavigator);


//         #fff
