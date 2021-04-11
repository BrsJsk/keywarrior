import { interval } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { STOP_ENGINE } from './engine'
import { getRandomWord, insertWord } from './word'

export class Row {
  GET_WORD_INTERVAL = 2000
  row: number
  constructor(row: number) {
    this.row = row
    this.generateWord()
  }

  generateWord = (): void => {
    interval(this.GET_WORD_INTERVAL)
      .pipe(takeUntil(STOP_ENGINE))
      .subscribe(() => {
        const word = getRandomWord()

        insertWord(word, this.row)
      })
  }
}
