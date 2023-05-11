import React, { useState, useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import fontsLoaded from './hooks/useFonts'
import { useFonts } from 'expo-font'
import { Feather } from '@expo/vector-icons'; 


export default function login() {

  const [fontsLoad] = useFonts(fontsLoaded)

  const onLayoutRootView = useCallback(async () => {
  if (fontsLoad) {
    await SplashScreen.hideAsync();
  }
  }, [fontsLoad]);

  if (!fontsLoad) {
    return null;
  }
 
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.subContainer}>
      <Text style={styles.heading}>Sign in to your Account</Text>
      <Text style={styles.subHeading}>Sign in to your Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    backgroundColor: 'dimgrey',
    height: 250
  },
  heading: {
    top: 60,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 48,
    fontFamily: 'Ubuntu',
    color: 'white'
  },
  subHeading: {
    top: 50,
    padding: 10,
    color: 'white',
    fontSize: 20,
    bottom: 0,
    fontFamily: 'Ubuntu'
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'grey'
  }

})