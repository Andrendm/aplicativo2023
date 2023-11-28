import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const Chama = ({navigation}) => {

  return (

    <View style = {chama.class1}>

    <View>

       <TouchableOpacity style = {chama.seta} onPress={() => navigation.navigate('Home')}>
      
          <FontAwesome5 name='arrow-left' size={30} />
      
       </TouchableOpacity>

    </View>


    
       <Image style={chama.img} source={require('../imgs/chama.png')} />
       
       <Text>Este é o Chama</Text>
    
    </View>

  );
}


const chama = StyleSheet.create({

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

export default Chama;