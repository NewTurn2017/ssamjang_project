import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import Screen4 from '../screens/Screen4'

const Tab = createBottomTabNavigator()
const screens = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Screen2',
    component: Screen2,
  },
  {
    name: 'Screen3',
    component: Screen3,
  },
  {
    name: 'Screen4',
    component: Screen4,
  },
]

const TabBarComponent = () => {
  return (
    <Tab.Navigator>
      {screens.map((screen, i) => (
        <Tab.Screen key={i} name={screen.name} component={screen.component} />
      ))}
    </Tab.Navigator>
  )
}

export default TabBarComponent
