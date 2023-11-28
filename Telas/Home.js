import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';


const Home = ({navigation}) => {

  return (

    <View  style = {home.class1}>

      <View>

      <TouchableOpacity style = {home.seta} onPress={() => navigation.navigate('Splash')}>
      
        <FontAwesome5 name='arrow-left' size={30} />
      
      </TouchableOpacity>
    
      </View>


       <TouchableOpacity style = {home.botao} onPress={() => navigation.navigate('Friagem')}>
       
        <Text>Friagem</Text>
       
       </TouchableOpacity>


       <TouchableOpacity  style = {home.botao} onPress={() => navigation.navigate('Besta')}>
       
        <Text>Besta</Text>
       
       </TouchableOpacity>


       <TouchableOpacity  style = {home.botao} onPress={() => navigation.navigate('Quatro')}>
       
        <Text>Quatro Braços</Text>
       
       </TouchableOpacity>


       <TouchableOpacity  style = {home.botao} onPress={() => navigation.navigate('Chama')}>
       
        <Text>Chama</Text>
       
       </TouchableOpacity>
    
    </View>

  );
}

const home = StyleSheet.create({

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
    margin:10,

    
  },

  seta: {
    marginTop:-220,
    marginRight:300,
  },



});


export default Home;