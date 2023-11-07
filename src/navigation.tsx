// libs
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// navbar
import CustomNavbar from './components/navbar'

// views
import Dashboard from './views/Dashboard'
import Scan from './views/Scan'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const screenOptions = (tabVisible: boolean = true) => {
    return { options: { tabBarVisible: tabVisible ? true : false } }
  }

  return (
    <Tab.Navigator tabBar={(props) => <CustomNavbar {...props} />} initialRouteName="Expenses">
      <Tab.Screen name="Home" component={Dashboard} {...screenOptions(true)} />
      <Tab.Screen name="Scan" component={Scan} {...screenOptions(true)} />
    </Tab.Navigator>
  )
}

const Router = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Router.Navigator headerMode="none" initialRouteName="Onboarding">
        <Router.Screen name="Home" component={TabNavigator} />
      </Router.Navigator>
    </NavigationContainer>
  )
}
