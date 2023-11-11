import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import {styles} from './style';


  export function TxtTittle({ text }) {
    return (
            <Text style={styles.TittleTxt}>{text}</Text>
    );
  };
