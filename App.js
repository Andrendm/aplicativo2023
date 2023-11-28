         import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Andre from './Telas/Andre';
import Home from './Telas/Home';
import Chama from './Telas/Chama';
import Quatro from './Telas/Quatro';
import Friagem from './Telas/Friagem';
import Besta from './Telas/Besta';

const App = () => {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions = {{ headerShown:false }}>
      
        <Stack.Screen name='Splash' component={Andre} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Chama' component={Chama} />
        <Stack.Screen name='Friagem' component={Friagem} />
        <Stack.Screen name='Quatro' component={Quatro} />
        <Stack.Screen name='Besta' component={Besta} />
      
      </Stack.Navigator>


    </NavigationContainer>

  );

}
export default App;
