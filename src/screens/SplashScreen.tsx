import { Image, StatusBar, StyleSheet, View } from 'react-native'

// Components
import { Fadeable } from '../components'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Fadeable>
        <Image source={require('../../assets/images/bubbo_logo.jpeg')} style={styles.image} />
      </Fadeable>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  image: {
    width: '100%',
    resizeMode: 'contain'
  }
})
