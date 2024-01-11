import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import { HomeScreen, DetailsScreen } from '../screens'

// Types
import { BooksStackParamList } from './types'

const BooksStack = createNativeStackNavigator<BooksStackParamList>()

const BooksLayout = () => {
  return (
    <BooksStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' }
      }}>
      <BooksStack.Screen name="HomeScreen" component={HomeScreen} />
      <BooksStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </BooksStack.Navigator>
  )
}

export default BooksLayout
