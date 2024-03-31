import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import ColorsScreen from './screens/ColorsScreen';
// import CombinationsScreen from './screens/CombinationsScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Colors" component={ColorsScreen} />
        <Tab.Screen name="Combinations" component={CombinationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
