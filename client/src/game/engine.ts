import { Subject } from 'rxjs'

const STOP_ENGINE = new Subject<boolean>()

export const initializeEngine = () => {
  // watchWords()
}

export const stopEngine = () => {
  STOP_ENGINE.next(true)
}
