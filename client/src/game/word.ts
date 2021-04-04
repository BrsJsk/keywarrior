import { v4 as uuidv4 } from 'uuid'
import randomWords from 'random-words'
import { getEnteredWord } from './tracker'

export interface WordCount {
  id: string
  word: string
  row: number
}

let words: WordCount[] = []

getEnteredWord.subscribe((d) => {})

export const getRandomWord = (): string => randomWords()

export const insertWord = (word: string, row: number): WordCount | null => {
  const rowElement = document.getElementById(`canvas-row-${row}`)

  const id = String(uuidv4()).replace('-', '')
  const wordElement = `<p id="${id}">${word}</p>`

  if (rowElement) {
    addWordToCollection(id, row, word)
    rowElement.insertAdjacentHTML('beforeend', wordElement)

    // remove old element after animation is done
    // it is no longer visible and we clear it from DOM
    const newElem = document.getElementById(id)
    newElem?.onanimationend = () => {
      removeWord(newElem, id)
    }

    return {
      word,
      row,
      id,
    }
  }

  return null
}

const addWordToCollection = (id: string, row: number, word: string): void => {
  words = [
    ...words,
    {
      id,
      row,
      word,
    },
  ]
}

const removeWordFromCollection = (id: string): void => {
  words = words.filter((collection) => collection.id !== id)
}

const removeWord = (newElem: HTMLElement | null, id: string) => {
  newElem?.remove()
  removeWordFromCollection(id)
}
