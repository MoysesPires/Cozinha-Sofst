import React, { useEffect, useState } from 'react';
import { View, Image, Alert } from 'react-native';

import { styles } from "./style.js";

import ImgLog from '../../../assets/ImgLog.png';

import { Button } from '../../components/ButtonDefault';
import { ButtonReturn } from '../../components/ButtonReturn';
import { Input } from '../../components/Input';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  function TelaHome() {
    navigation.navigate('Home');
  }

  function TelaLogin() {
    navigation.navigate('Login');
  }

  function TelaRecipes() {
    navigation.navigate('Recipes');
  }



  function checkAllFields() {
    console.log(email);
    console.log(password);
    if (email !== '' && password !== '' && password2 !== '') {
      checkLogin(email, password, password2);
    } else {
      Alert.alert('Por favor, insira os dados nos campos!');
    }
  }

  function checkLogin(email, password, password2) {
    if (email === 'example@gmail.com' && password === '123' && password2 === '123') {
      Alert.alert('Login bem-sucedido!');
      TelaRecipes();
    } else {
      Alert.alert('Verifique o e-mail e se as senhas coincidem');
    }
  }

  return (
    <View style={styles.container}>
      <Image source={ImgLog} style={styles.ImageCentral} />
      <View style={styles.BtnVoltar}>
        <ButtonReturn onPress={TelaHome} />
      </View>

      <View style={styles.Form}>
        <View style={styles.TxtPrincipal}>
          
        </View>

        <View style={styles.InpEmail}>
          
          <Input
            onChangeText={(text) => {
              console.log(text)
              setEmail(text.toLowerCase());
            }}
            placeholder="Email"
            keyboardType="email-address"
            maxLength={50}
          />
        </View>

        <View style={styles.InpPassword}>
          
          <Input
            onChangeText={(text) => {
              console.log(text)
              setPassword(text.toLowerCase());
            }}
            placeholder="******"
            keyboardType="default"
            maxLength={15}
            senha={true}
          />
        </View>

        <View style={styles.InpPassword2}>
          
          <Input
            onChangeText={(text) => {
              console.log(text)
              setPassword2(text.toLowerCase());
            }}
            placeholder="******"
            keyboardType="default"
            maxLength={15}
            senha={true}
          />
        </View>

        <View style={styles.Log}>
          
        </View>

          <View style={styles.Buttons}>
            <Button text="Entrar" onPress={checkAllFields}/>
          </View>
      </View>
    </View>
  );
}
