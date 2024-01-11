import { StyleSheet, View } from 'react-native'

interface SpacerProps {
  horizontal?: boolean
}

const Spacer = ({ horizontal = false }: SpacerProps) => {
  return <View style={{ ...styles.container, flexDirection: horizontal ? 'row' : 'column' }} />
}

export default Spacer

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
