import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import Login from './screens/Login'
import Home from './screens/Home'
import Profile from './screens/Profile'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './store/Store'
const Stack = createNativeStackNavigator();
const App = (props) => {
  return (
    <Provider store={Store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home}
            options={{ headerLeft: () => (<Text>{ }</Text>) }} />
          <Stack.Screen name="Profile" component={Profile}
            options={{ headerLeft: () => (<Text>{ }</Text>) }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}
export default App