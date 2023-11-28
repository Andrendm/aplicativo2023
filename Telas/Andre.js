import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const Andre = ({navigation}) => {

  return (

      <View  style = {andre.class1}>
      
      <TouchableOpacity style = {andre.botao} onPress={() => navigation.navigate('Home')} >

        <Text>Entrar</Text>

      </TouchableOpacity>
      </View>

  );

}

const andre = StyleSheet.create({

  class1: {

    flex:1,
    backgroundColor:'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',


  },

  botao: {

    backgroundColor:'#16AE58',
    width:125,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,

    
  }

});


export default Andre;