import { interval, Subject } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'

interface WordCount {
  id: string
  word: string
  row: number
}

const wordsCollection = new Subject<WordCount[]>()
const collection: WordCount[] = []

let distance = 0

export const increaseMovementFromRight = () => {
  interval(1000).subscribe(() => {
    distance = distance + 20

    collection.forEach((item) => {
      const { id } = item
      const element = document.getElementById(`${id}`)
      if (element) {
        console.log('found element')
        const rightStyle = element?.style.right
        const paddingNew = rightStyle + distance
        element.style.right = `${paddingNew}px`
      }
    })
  })
}

export const watchWords = (): void => {
  //   wordsCollection.subscribe((data) => {
  //     data.forEach((item) => {
  //       const { id } = item
  //       console.log(id)
  //       const element = document.getElementById(`${id}`)
  //       if (element) {
  //         console.log('found element')
  //         const rightStyle = element?.style.right
  //         const paddingNew = rightStyle + distance
  //         // console.log(element?.style.right)
  //         element.style.right = `${paddingNew}px`
  //         // console.log(element.style.paddingRight)
  //       }
  //     })
  //   })
}

export const insertWord = (word: string, row: number): void => {
  appendWordToRow(row, word)
}

const appendWordToRow = (row: number, word: string) => {
  const rowElement = document.getElementById(`canvas-row-${row}`)

  const id = String(uuidv4()).replace('-', '')
  const wordElement = `<p id="${id}">${word}</p>`

  if (rowElement) {
    rowElement.insertAdjacentHTML('beforeend', wordElement)
    collection.push({
      word,
      row,
      id,
    })

    wordsCollection.next(collection)
  }
}
