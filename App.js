import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home/Home'
import Projects from './screens/Projects/Projects'

import { Provider } from 'react-redux'
import store from './store/'

//https://reactnavigation.org/docs/hello-react-navigation/
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Projects" component={Projects} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
