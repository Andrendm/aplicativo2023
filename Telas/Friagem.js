import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';


const Friagem = ({navigation}) => {

  return (

    <View style = {friagem.class1}>

    <View>

      <TouchableOpacity style = {friagem.seta} onPress={() => navigation.navigate('Home')}>
      
        <FontAwesome5 name='arrow-left' size={30} />
      
      </TouchableOpacity>

    </View>
      

      <Image style={friagem.img} source={require('../imgs/friagem.png')} />
    
      <Text>Este é o Friagem</Text>
    
    </View>

  );
}

const friagem = StyleSheet.create({

  class1: {

    flex:1,
    backgroundColor:'lightgreen',
    justifyContent: 'center',  
    alignItems: 'center',
    
  },

  img: {

    width:300,
    height:300,

  },

  seta: {
  marginTop:-160,
  marginRight:300,
  },

});



export default Friagem;

