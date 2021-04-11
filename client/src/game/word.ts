import { v4 as uuidv4 } from 'uuid'
import randomWords from 'random-words'
import { getEnteredWord } from './tracker'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

export interface WordCount {
  id: string
  word: string
  row: number
}

let words: WordCount[] = []

export const getRandomWord = (): string => randomWords()

const getElement = (id: string): HTMLElement | null =>
  document.getElementById(id)

export const insertWord = (word: string, row: number): WordCount | null => {
  const rowElement = document.getElementById(`canvas-row-${row}`)
  const id = String(uuidv4()).replace('-', '')
  const wordElement = `<p id="${id}">${word}</p>`
  const destroy$: Subject<boolean> = new Subject()

  const removeElement = () => {
    const newElem = getElement(id)
    removeWord(newElem, id)
    destroy$.next()
  }

  getEnteredWord.pipe(takeUntil(destroy$)).subscribe((enteredWord) => {
    if (enteredWord.includes(word)) {
      removeElement()
    }
  })

  if (rowElement) {
    addWordToCollection(id, row, word)
    rowElement.insertAdjacentHTML('beforeend', wordElement)

    // remove old element after animation is done
    // it is no longer visible and we clear it from DOM
    const newElem = getElement(id)
    newElem?.onanimationend = () => {
      removeElement()
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
