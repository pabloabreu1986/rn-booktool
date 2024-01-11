import { Book } from '../../types'

export interface HomeScreenState {
  books: Book[]
  saving: boolean
  loadingBooks: boolean
  modalVisible: boolean
  newBook: Partial<Book>
}
