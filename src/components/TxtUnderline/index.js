import React from 'react';
import { Text } from 'react-native';
import {styles} from './style';

  export function TxtUnderline({ text, onPress }) {
    return (
            <Text style={styles.TxtUnd} onPress={onPress}>{text}</Text>
    );
  };