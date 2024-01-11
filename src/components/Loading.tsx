import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
