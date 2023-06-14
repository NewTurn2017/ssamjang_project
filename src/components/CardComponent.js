import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const CardComponent = ({ title, content, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentContainer}>
        <Icon name={icon} size={24} color="#000" />
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    width: (Dimensions.get('window').width - 30) / 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontSize: 16,
    marginLeft: 10,
  },
})

export default CardComponent
