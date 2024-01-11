import { PropsWithChildren, useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'

interface FadeableProps extends PropsWithChildren {
  duration?: number
  type?: 'in' | 'out' // TODO: implement type of fade
}

const Fadeable = ({ children, duration = 1100 }: FadeableProps) => {
  const animValue = new Animated.Value(0)
  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: animValue,
        transform: [
          {
            scale: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 1]
            })
          }
        ]
      }}>
      {children}
    </Animated.View>
  )
}

export default Fadeable

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
