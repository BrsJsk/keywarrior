import { GET_WORD } from './engine'
import { insertWord } from './word'

export const activateRow = (index: number): void => {
  console.log('activating', index)

  GET_WORD.subscribe((word) => {
    console.log(word)
    insertWord(word, index)
  })
}
