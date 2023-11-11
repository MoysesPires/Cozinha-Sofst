import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./style.js";

import { ButtonReturn } from '../../components/ButtonReturn';
import { TxtTittle } from '../../components/TxtTittle';

export default function Recipes({navigation}) {

  function TelaHome(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.BtnVoltar}>
        <ButtonReturn onPress={TelaHome} />
      </View>
      
      <TxtTittle text="Essa é a Home" />
    
    </View>
  );

}

 

