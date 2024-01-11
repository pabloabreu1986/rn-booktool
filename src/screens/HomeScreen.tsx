import { useEffect, useReducer } from 'react'
import { FlatList, Modal, Platform, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Config from 'react-native-config'

// Api
import { getAllBooks, createBook } from '../clients/api/api'

// State
import { booksReducer } from '../state/reducer'
import { doLoadingBooks, doModalVisible, doSaving, doUpdateBooksList, doUpdateNewBook } from '../state/actions'

// Components
import { Button, Header, Loading, TextInput, Fab, Spacer } from '../components'
import { BooksListItem } from './components'

// Types
import { Book } from '../types'
import { BooksStackParamList } from '../navigation/types'
type HomeScreenProps = NativeStackScreenProps<BooksStackParamList, 'HomeScreen'>

// Constants
import { INITIAL_BOOK, INITIAL_HOME_SCREEN_STATE } from './constants'

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const _URL = `${Config.BOOKS_API_URL}`

  const [{ loadingBooks, modalVisible, saving, books, newBook }, dispatch] = useReducer(
    booksReducer,
    INITIAL_HOME_SCREEN_STATE
  )

  const controller = new AbortController()
  const signal = controller.signal

  const onBookSelectedHandler = (id: string) => {
    navigation.navigate('DetailsScreen', { id })
  }

  const dispatchHandler = (toDispatch: string, value: boolean | Partial<Book>) => {
    switch (toDispatch) {
      case 'loadingBooks':
        dispatch(doLoadingBooks(!!value))
        break
      case 'modalVisible':
        dispatch(doModalVisible(!!value))
        break
      case 'saving':
        dispatch(doSaving(!!value))
        break
      case 'updateBooksList':
        dispatch(doUpdateBooksList(value as Book[]))
        break
      case 'updateNewBook':
        dispatch(doUpdateNewBook(value as Partial<Book>))
        break
    }
  }

  const updateList = () => {
    dispatchHandler('loadingBooks', true)
    getAllBooks(_URL, signal)
      .then(res => dispatchHandler('updateBooksList', res.books))
      .catch(err => {
        //TODO: handle error to show error component
        dispatchHandler('loadingBooks', false)
      })
      .finally(() => dispatchHandler('loadingBooks', false))
  }

  const handleOnchange = (field: string, value: string) => {
    dispatchHandler('updateNewBook', { ...newBook, [field]: value })
  }

  const handleCreate = async () => {
    dispatchHandler('saving', true)
    try {
      if (newBook.title !== '') {
        await createBook(_URL, newBook, signal)
        dispatchHandler('saving', false)
        updateList()
        dispatchHandler('modalVisible', false)
        dispatchHandler('updateNewBook', INITIAL_BOOK)
      }
    } catch (error) {
      // Handle creation error
    }
  }

  const handleModalCancel = () => {
    dispatchHandler('modalVisible', false)
    dispatchHandler('updateNewBook', INITIAL_BOOK)
  }

  useEffect(() => {
    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateList()
    })
    return unsubscribe
  }, [navigation])

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Header title={'Available Books'} headerLine onUpdate={() => updateList()} />
      {!loadingBooks ? (
        <FlatList
          data={books}
          renderItem={({ item, index }) => (
            <BooksListItem book={item} index={index} onBookSelected={onBookSelectedHandler} />
          )}
          ListFooterComponent={<View style={{ height: 100 }} />}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Header title="No books were found :'(" />
              <Spacer />
              <Header title="Try Later" />
            </View>
          }
        />
      ) : (
        <Loading />
      )}
      <Fab iconName="add" onPress={() => dispatchHandler('modalVisible', true)} />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {!saving ? (
              <View>
                <Header title={'Add new book'} headerLine headerTitleStyles={{ fontSize: 26, right: 0 }} />
                <TextInput
                  onChangeText={title => handleOnchange('title', title)}
                  value={newBook.title || ''}
                  placeholder="Title"
                />
                <TextInput
                  onChangeText={author => handleOnchange('author', author)}
                  value={newBook.author}
                  placeholder="Author"
                />
                <TextInput
                  onChangeText={genre => handleOnchange('genre', genre)}
                  value={newBook.genre || ''}
                  placeholder="Genre"
                />
                <TextInput
                  onChangeText={publication_date => handleOnchange('publication_date', publication_date)}
                  value={newBook.publication_date}
                  placeholder="Publication year"
                  keyboardType="number-pad"
                  maxLength={4}
                />
                <TextInput
                  onChangeText={sales => handleOnchange('sales', sales)}
                  value={newBook.sales}
                  placeholder="Sales"
                />
                <View
                  style={{
                    height: 110,
                    justifyContent: 'space-between'
                  }}>
                  <Button onPress={handleCreate} title="Save" />
                  <Button type="secondary" onPress={handleModalCancel} title="Cancel" />
                </View>
              </View>
            ) : (
              <Loading />
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: Platform.OS === 'android' ? 20 : 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  modalView: {
    width: '96%',
    minHeight: 400,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})
