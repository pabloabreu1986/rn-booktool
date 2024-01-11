import { Image, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'

// Components
import { Fadeable } from '../../components'
import { Book } from '../../types'

interface BooksListItemProps {
  book: Book
  index: number
  lastItem?: boolean
  onBookSelected: (id: string) => void
}

const BooksListItem = ({ book: { id, title }, index, lastItem = false, onBookSelected }: BooksListItemProps) => {
  const { width } = useWindowDimensions()
  const duration = (index + 1) * 300

  const component = !lastItem ? (
    <Fadeable duration={duration}>
      <View style={{ ...styles.cardContainer, width: width - 30 }}>
        <Image source={require('../../../assets/images/bubbo_logo.jpeg')} resizeMode="contain" style={styles.avatar} />
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => onBookSelected(id!)} style={styles.button}>
          <Text style={styles.buttonText}>{' Detalles '}</Text>
        </TouchableOpacity>
      </View>
    </Fadeable>
  ) : (
    <View style={{ height: Platform.OS === 'android' ? 150 : 100 }} />
  )
  return component
}

export default BooksListItem

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 100,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#878787'
  },
  titleContainer: {
    padding: 8,
    flexDirection: 'row',
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '400'
  },
  button: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: { fontWeight: 'bold', color: '#12C3B7' }
})
