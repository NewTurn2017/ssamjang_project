import React from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import ProfileComponent from '../components/ProfileComponent'
import CardComponent from '../components/CardComponent'
import RoundedComponent from '../components/RoundedComponent'
import { LineChart } from 'react-native-chart-kit'
import { chartData, chartConfig } from '../data/chartConfig'

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width

  return (
    <ScrollView style={styles.container}>
      <ProfileComponent name="John Doe" image="../assets/profile.png" />
      <View style={styles.cardContainer}>
        <CardComponent title="94.0" content="최근" icon="bicycle" />
        <CardComponent title="113.0" content="평균(3일)" icon="body-outline" />
      </View>
      <RoundedComponent text1="103.0" text2="102.0" text3="99.0" />
      <LineChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default HomeScreen
