import React from 'react';
import { Text, TouchableOpacity, StatusBar, View, Image } from 'react-native';
import Return from "../../../assets/Return.png";
import {styles} from './style';


  export function ButtonReturn({ onPress }) {
    return (
      <View>
        <TouchableOpacity
        onPress = {onPress}
        style={styles.BtnR}>
          <Image
            source={Return}
            style={styles.ImgReturn}
          />
        </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    );
  };