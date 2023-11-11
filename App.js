import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Recipes from './src/pages/Recipes';

import * as Font from 'expo-font'

const Stack = createNativeStackNavigator();



function Navigator(){
  return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Recipes' component={Recipes}/>
      </Stack.Navigator>
  )
}

export default function App(){
  const [appIsReady, setAppIsReady] = useState(false)
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins: require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
          'poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf')
        })
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    void prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }
  return(
    <NavigationContainer>
      <Navigator onLayoutRootView={onLayoutRootView} />
    </NavigationContainer>
  );
}