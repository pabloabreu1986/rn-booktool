import { Book } from '../../types'

export type BooksActions =
  | { type: 'loadingBooks'; payload: { value: boolean } }
  | { type: 'modalVisible'; payload: { value: boolean } }
  | { type: 'saving'; payload: { value: boolean } }
  | {
      type: 'updateNewBook'
      payload: { value: Partial<Book> }
    }
  | { type: 'updateBooksList'; payload: { value: Book[] } }
  | { type: 'saveBook'; payload: { value: Book } }
  | { type: 'updateBook'; payload: { value: Partial<Book> } }

export const doLoadingBooks = (value: boolean): BooksActions => ({
  type: 'loadingBooks',
  payload: { value }
})

export const doModalVisible = (value: boolean): BooksActions => ({
  type: 'modalVisible',
  payload: { value }
})

export const doSaving = (value: boolean): BooksActions => ({
  type: 'saving',
  payload: { value }
})

export const doUpdateNewBook = (value: Partial<Book>): BooksActions => ({
  type: 'updateNewBook',
  payload: { value }
})

export const doUpdateBooksList = (value: Book[]): BooksActions => ({
  type: 'updateBooksList',
  payload: { value }
})
