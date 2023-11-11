import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import {styles} from './style';


  export function TxtLabel({ text }) {
    return (
            <Text style={styles.LblTxt}>{text}</Text>
    );
  };