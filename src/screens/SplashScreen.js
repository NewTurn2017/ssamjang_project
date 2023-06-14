import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/splash.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default SplashScreen
