import React from 'react';
import { Text, TouchableOpacity, StatusBar, View, Image } from 'react-native';
import Return from "../../../assets/Return.png";
import {styles} from './style';


  export function Button({ text, onPress }) {
    return (
      <View>
        <TouchableOpacity
        style={styles.Btn1}
        onPress = {onPress}>
          <Text style={styles.TxtBtn1}>{text}</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    );
   
  };