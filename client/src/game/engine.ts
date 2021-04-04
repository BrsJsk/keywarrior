import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { increaseMovementFromRight, watchWords } from './word'

const STOP_ENGINE = new Subject<boolean>()
export const GET_WORD = new Subject<string>()

let isdone = false
export const initializeEngine = () => {
  startWordInterval()
  watchWords()
  increaseMovementFromRight()

  // setTimeout(() => {
  //   isdone = true
  // }, 10000)
}

export const stopEngine = () => {
  STOP_ENGINE.next(true)
}

const startWordInterval = () => {
  interval(3000)
    .pipe(takeUntil(STOP_ENGINE))
    .subscribe(() => {
      if (!isdone) {
        GET_WORD.next('wordd')
      }
    })
}
