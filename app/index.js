import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import fontsLoaded from './hooks/useFonts';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function Page() {

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
      <Text style={ styles.heading }>DimeCX</Text>
      <Image style={styles.introImage1} source={require('./assets/images/Appmonetization-bro.png')}/>
      <View style={styles.subContainer}>
          <Text style={ styles.subheading }>Achieve Your Dreams on a Budget</Text>
          <Text style={ styles.description }>We help you plan better and save more so you have a better today and tomorrow.</Text>
      </View>
      <Pressable style={styles.getStartedBtn}><Link style={styles.btnText} href={{pathname: 'login'}}>Get Started</Link></Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    marginTop: 75
  },
  heading: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 2,
    fontSize: 40,
    fontFamily: 'Montserrat'
  },
  introImage1:{
    height: 425,
    width: 425,
    flex: 5
  },
  subContainer:{
    flex: 3
  },
  subheading: {
    marginTop: 10,
    fontSize: 28,
    fontFamily: 'Bitter',
    fontWeight: 'bold'
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'OpenSans'
  },
  getStartedBtn: {
    flex: 1,
    margin: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 350
    },  
  btnText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'OpenSans'
  }

})
