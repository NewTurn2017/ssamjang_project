import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProfileComponent = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.image} source={require('../assets/profile.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
})

export default ProfileComponent
