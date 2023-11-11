import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';

import { styles } from './style.js';

import ImgLog from '../../../assets/ImgLog.png';

import { Button } from '../../components/ButtonDefault';
import { ButtonReturn } from '../../components/ButtonReturn';
import { Input } from '../../components/Input';
import { TxtLabel } from '../../components/TxtLabel';
import { TxtTittle } from '../../components/TxtTittle';
import { TxtUnderline } from '../../components/TxtUnderline';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function TelaHome() {
    navigation.navigate('Home');
  }

  function TelaRegister() {
    navigation.navigate('Register');
  }

  function TelaRecipes() {
    navigation.navigate('Recipes');
  }

  function checkAllFields() {
    if (email !== '' && password !== '') {
      verificaLogin(email, password);
    } else {
      Alert.alert('Por favor, insira os dados nos campos!');
    }
  }

  function verificaLogin(email, password) {
    if (email === 'example@gmail.com' && password === '123') {
      console.log('Login bem-sucedido!');
      TelaRecipes();
    } else {
      Alert.alert('Usuário ou senha inválidos');
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
          <TxtTittle text="Login" />
        </View>

        <View style={styles.InpEmail}>
          <TxtLabel text="EMAIL" />
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
          <TxtLabel text="SENHA" />
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

        <View style={styles.EsqSenha}>
          <TxtUnderline text="Esqueceu sua senha?" />
        </View>

        <View style={styles.Log}>
          <TxtUnderline onPress={TelaRegister} text="Crie uma conta" />
        </View>

        <View style={styles.Buttons}>
          <Button text="Entrar" onPress={checkAllFields} />
        </View>
      </View>
    </View>
  );
}