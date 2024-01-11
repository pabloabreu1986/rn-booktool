import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Spacer } from '.'

interface Props {
  headerContainertyle?: ViewStyle
  headerLine?: boolean
  headerTitleStyles?: TextStyle
  title: string
  onClose?: () => void
  onUpdate?: () => void
}

const Header = ({ headerContainertyle = {}, headerLine, headerTitleStyles = {}, title, onClose, onUpdate }: Props) => {
  return (
    <View style={[styles.headerContainer, headerContainertyle]}>
      <View style={styles.headerElements}>
        <Text style={[styles.headerTitle, headerTitleStyles]}>{title}</Text>
        <Spacer horizontal />
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <Icon name="close-circle-outline" size={32} color="red" />
          </TouchableOpacity>
        )}
        {onUpdate && (
          <TouchableOpacity onPress={onUpdate}>
            <Icon name="refresh" size={32} color="#14c6b8" />
          </TouchableOpacity>
        )}
      </View>
      {headerLine && <View style={styles.headerLine} />}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#525252'
  },
  headerElements: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 20
  }
})
