import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

const BookTextInput = (props: TextInputProps) => {
  return (
    <View style={styles.textContainer}>
      <TextInput style={styles.text} autoCorrect={false} {...props} />
    </View>
  )
}

export default BookTextInput

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: '#12C3B7',
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginBottom: 25,
    marginVertical: 10,
    paddingLeft: 10
  },
  text: {
    alignContent: 'center',
    color: 'grey',
    fontSize: 20
  }
})
