import { StyleSheet, View } from 'react-native'
import Navigation from './src/navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1 }
})
