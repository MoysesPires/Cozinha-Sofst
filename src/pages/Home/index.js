import React from 'react';
import { Image, Text, View} from 'react-native';
import {styles} from "./style"

import ImgLgInicio from '../../../assets/LgInico.png';

import { Button } from '../../components/ButtonDefault';


export default function Home({navigation}){

function TelaLogin(){
    navigation.navigate('Login')
}
function TelaRegister(){
    navigation.navigate('Register')
}

return(
    <View style={styles.container}>
        <View>
            <Image
              source={ImgLgInicio}
              style={styles.ImgCentral}
            />
        </View>

      <View style={styles.Buttons}>
        <Button text="Login" onPress={TelaLogin}/>
      
      <View style={styles.Btn2}>
        <Button text="Cadastrar" onPress={TelaRegister}/> 
      </View>
      </View>

    </View>
);
}