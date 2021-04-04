import { v4 as uuidv4 } from 'uuid'
import randomWords from 'random-words'
export interface WordCount {
  id: string
  word: string
  row: number
}

export const getRandomWord = (): string => randomWords()

export const insertWord = (word: string, row: number): WordCount | null => {
  const rowElement = document.getElementById(`canvas-row-${row}`)

  const id = String(uuidv4()).replace('-', '')
  const wordElement = `<p id="${id}">${word}</p>`

  if (rowElement) {
    rowElement.insertAdjacentHTML('beforeend', wordElement)

    // remove old element after animation is done
    // it is no longer visible and we clear it from DOM
    const newElem = document.getElementById(id)
    newElem?.onanimationend = () => {
      newElem?.remove()
    }

    return {
      word,
      row,
      id,
    }
  }

  return null
}
