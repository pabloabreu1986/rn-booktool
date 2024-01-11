import { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import { SplashScreen } from '../screens'

// Stacks
import BooksStack from './books-stack'

// Types
import { MainStackParamList } from './types'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Emulate preparing app proccess
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [isLoading])

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' }
      }}>
      {isLoading ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <Stack.Screen name="BooksStack" component={BooksStack} />
      )}
    </Stack.Navigator>
  )
}

export default MainStack
