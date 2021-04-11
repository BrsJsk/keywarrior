import { Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { clearCanvas, createCanvas } from './canvas'
import { resetScore } from './score'
import { trackKeyboardPress } from './tracker'

export const STOP_ENGINE = new Subject<boolean>().pipe(
  tap(() => {
    resetScore()
    clearCanvas()
  })
)

export const initializeEngine = () => {
  createCanvas()
  trackKeyboardPress()

  // will be used to get level, speed, customization etc
  // watchWords()
}

export const stopEngine = () => {
  STOP_ENGINE.next(true)
}
