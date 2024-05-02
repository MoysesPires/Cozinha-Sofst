import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./style.js";

import Label from '../../components/Label/index.js';

export default function Recipes({navigation}) {

  function TelaHome(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Label 
        text="Abrir Detalhes" 
        size="large"/>
    </View>
  );

}

 

