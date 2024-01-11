import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface FabProps {
  containerStyles?: ViewStyle
  iconColor?: string
  iconName?: string
  iconSize?: number
  position?: 'TR' | 'TL' | 'BR' | 'BL'
  onPress: () => void
}

export default function Fab({
  containerStyles = {},
  iconColor = 'white',
  iconName = 'check',
  iconSize = 32,
  position = 'BR',
  onPress
}: FabProps) {
  return (
    <View style={[styles.fabContainer, containerStyles, styles[position]]}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </TouchableOpacity>
    </View>
  )
}

const vertical = 40
const horizontal = 30

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(20, 198, 184, 0.9)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  TR: {
    top: vertical,
    right: horizontal
  },
  TL: {
    top: vertical,
    left: horizontal
  },
  BR: {
    bottom: vertical,
    right: horizontal
  },
  BL: {
    bottom: vertical,
    left: horizontal
  },
  btn: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
