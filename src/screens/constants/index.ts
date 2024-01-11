import { HomeScreenState } from '../../state/interfaces'
import { Book } from '../../types'

export const INITIAL_BOOK: Book = {
  author: '',
  genre: '',
  publication_date: '',
  sales: '',
  title: ''
}

export const INITIAL_HOME_SCREEN_STATE: HomeScreenState = {
  books: [],
  saving: false,
  loadingBooks: true,
  modalVisible: false,
  newBook: INITIAL_BOOK
}
