import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const Quatro = ({navigation}) => {

  return (

    <View style = {quatro.class1}>

      <View>

      <TouchableOpacity style={quatro.seta} onPress={() => navigation.navigate('Home')}>
      
        <FontAwesome5 name='arrow-left' size={30} />
      
      </TouchableOpacity>

      </View>


      <Image style={quatro.img} source={require('../imgs/quatro-bracos.png')} />
    
      <Text>Este é o Quatro braços</Text>
    
    </View>

  );
}

const quatro = StyleSheet.create({

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

export default Quatro;