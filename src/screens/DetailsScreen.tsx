import { useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Config from 'react-native-config'

// Api
import { deleteBook, getBookById, updateBook } from '../clients/api/api'

// Components
import { Button, Header, Loading, Spacer, TextInput } from '../components'

// Types
import { Book } from '../types'
import { BooksStackParamList } from '../navigation/types'
type DetailsProps = NativeStackScreenProps<BooksStackParamList, 'DetailsScreen'>

// Constants
import { INITIAL_BOOK } from './constants'

const DetailsScreen = ({ navigation, route }: DetailsProps) => {
  const _URL = `${Config.BOOKS_API_URL}/${route.params.id}`

  const [loading, setLoading] = useState(true)
  const [book, setBook] = useState<Book>(INITIAL_BOOK)

  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    setLoading(true)

    getBookById(_URL, signal)
      .then(res => setBook(res.books))
      .catch(err => {
        //TODO: Handle error with error component to show
        setLoading(false)
      })
      .finally(() => setLoading(false))

    return () => {
      controller.abort()
    }
  }, [])

  const handleOnchange = (field: string, value: string) => {
    setBook(book => ({ ...book, [field]: value }))
  }

  const handleUpdate = async () => {
    setLoading(true)
    try {
      await updateBook(_URL, book, signal)
    } catch (error) {
      //TODO: Handle error with error component to show
    }
    setLoading(false)
  }

  const handleDelete = async () => {
    const res = await deleteBook(_URL, signal)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Header title="Book Details" headerLine onClose={() => handleDelete()} />
      {!loading ? (
        <View>
          <TextInput onChangeText={title => handleOnchange('title', title)} value={book.title} placeholder="Title" />
          <TextInput
            onChangeText={author => handleOnchange('author', author)}
            value={book.author}
            placeholder="Author"
          />
          <TextInput onChangeText={genre => handleOnchange('genre', genre)} value={book.genre} placeholder="Genre" />
          <TextInput
            onChangeText={publication_date => handleOnchange('publication_date', publication_date)}
            value={String(book.publication_date)}
            placeholder="Publication Date"
            keyboardType="number-pad"
            maxLength={4}
          />
          <TextInput
            onChangeText={sales => handleOnchange('sales', sales)}
            value={String(book.sales)}
            placeholder="Sales"
          />
        </View>
      ) : (
        <Loading />
      )}
      <Spacer />
      <View
        style={{
          height: 110,
          justifyContent: 'space-between'
        }}>
        <Button onPress={handleUpdate} title="Update Book" />
        <Button onPress={() => navigation.goBack()} title="Go Back" type="secondary" />
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: Platform.OS === 'android' ? 20 : 10
  }
})
