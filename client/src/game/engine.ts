import { Subject } from 'rxjs'
import { createCanvas } from './canvas'

const STOP_ENGINE = new Subject<boolean>()

export const initializeEngine = () => {
  createCanvas()

  // will be used to get level, speed, customization etc
  // watchWords()
}

export const stopEngine = () => {
  STOP_ENGINE.next(true)
}
