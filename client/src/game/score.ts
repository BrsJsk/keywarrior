import { Subject } from 'rxjs'

let _score: number = 0
export const getScore$: Subject<number> = new Subject()

export const incrementScore = (increment = 1): void => {
  _score = _score + increment

  getScore$.next(_score)
}

export const resetScore = (): void => {
  _score = 0

  getScore$.next(_score)
}
