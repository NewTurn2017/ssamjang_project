// chartConfig.js
export const chartData = {
  labels: ['10', '11', '12', '13', '14', '15'],
  datasets: [
    {
      data: [20, 45, 28, 80, 60, 99],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      strokeWidth: 2,
    },
    {
      data: [10, 30, 40, 95, 85, 91],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
}

export const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
}
