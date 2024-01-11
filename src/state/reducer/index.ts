import { BooksActions } from '../actions'
import { HomeScreenState } from '../interfaces'

export const booksReducer = (state: HomeScreenState, { type, payload }: BooksActions): HomeScreenState => {
  switch (type) {
    case 'loadingBooks':
      return {
        ...state,
        loadingBooks: payload.value
      }

    case 'modalVisible':
      return {
        ...state,
        modalVisible: payload.value
      }

    case 'saving':
      return {
        ...state,
        saving: payload.value
      }

    case 'updateBooksList':
      return {
        ...state,
        books: payload.value
      }

    case 'updateNewBook':
      return {
        ...state,
        newBook: payload.value
      }

    default:
      return state
  }
}
