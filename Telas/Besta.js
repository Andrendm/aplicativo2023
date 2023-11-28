import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const Besta = ({navigation}) => {

  return (

    <View style = {besta.class1}>

    <View>

      <TouchableOpacity style={besta.seta} onPress={() => navigation.navigate('Home')}>
      
        <FontAwesome5 name='arrow-left' size={30} />
      
      </TouchableOpacity>

    </View>

      

        <Image style={besta.img} source={require('../imgs/besta.png')} />
    
        <Text>Este é o Besta</Text>
    
    
    </View>

  );
}

const besta = StyleSheet.create({

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



export default Besta;