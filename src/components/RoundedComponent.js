import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RoundedComponent = ({ text1, text2, text3 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
      <Text style={styles.text}>{text3}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
})

export default RoundedComponent
