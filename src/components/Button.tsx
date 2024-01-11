import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  styles?: ViewStyle
  title?: string
  type?: 'primary' | 'secondary'
}

const Button = ({ title = 'OK', type = 'primary', ...props }: ButtonProps) => {
  const buttonStyles = type === 'primary' ? styles.primaryButton : styles.secondaryButton
  return (
    <TouchableOpacity {...props} style={[buttonStyles, props.styles]}>
      <Text style={{ ...styles.buttonLabel, color: type === 'primary' ? 'white' : '#12C3B7' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#12C3B7',
    width: '100%',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondaryButton: {
    borderColor: '#12C3B7',
    borderWidth: 2,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    fontSize: 26,
    fontWeight: '600'
  }
})
