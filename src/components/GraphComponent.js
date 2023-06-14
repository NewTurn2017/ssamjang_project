import React from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const GraphComponent = () => {
  const data = {
    labels: ['10', '11', '12', '13', '14', '15'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [30, 60, 75, 94, 100, 120],
        color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['User', 'Average'],
  }

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  }

  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={chartConfig}
      bezier
    />
  )
}

export default GraphComponent
