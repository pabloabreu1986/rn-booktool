import { Book } from '../../types'

export const createBook = async (
  url: string,
  newBook: Partial<Book>,
  signal: any
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook),
      signal
    })
    const res = await response.json()
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}

export const getAllBooks = async (url: string = '', signal: any) => {
  try {
    const response = await fetch(url, { signal })
    const res = await response.json()
    return res
  } catch (error) {
    return error
  }
}

export const getBookById = async (url: string = '', signal: any) => {
  try {
    const response = await fetch(url, { signal })
    const res = await response.json()
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}

export const updateBook = async (
  url: string,
  newBook: Partial<Book>,
  signal: any
) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook),
      signal
    })
    const res = await response.json()
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}

export const deleteBook = async (url: string, signal: any) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      signal
    })
    const res = await response.json()
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}
