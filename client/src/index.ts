import { createCanvas, initializeEngine, stopEngine } from './game'
import './styles/main.scss'

window.onload = () => {
  createCanvas()
  initializeEngine()
}

window.onclose = () => {
  stopEngine()
}
