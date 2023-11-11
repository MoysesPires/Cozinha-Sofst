import React from 'react';
import { TextInput } from 'react-native';
import {styles} from './style';


  export function Input({ onChangeText, placeholder, keyboardType, senha=false, maxLength }) {
    return (
            <TextInput
              onChangeText={onChangeText}
              style={styles.Input}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={senha}
              maxLength={maxLength}
            />
    );
  };