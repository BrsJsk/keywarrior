import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

const STOP_ENGINE = new Subject<boolean>()
export const GET_WORD = new Subject<string>()

export const initializeEngine = () => {
  startWordInterval()
}

export const stopEngine = () => {
  STOP_ENGINE.next(true)
}

const startWordInterval = () => {
  interval(1000)
    .pipe(takeUntil(STOP_ENGINE))
    .subscribe(() => {
      GET_WORD.next('wordd')
    })
}
