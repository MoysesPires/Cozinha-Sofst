import React from 'react';
import { Text } from 'react-native';
import {styles} from './style';

  export function TxtDefault({ text }) {
    return (
            <Text style={styles.TxtDft}>{text}</Text>
    );
  };