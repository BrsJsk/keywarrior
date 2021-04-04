import { createCanvas, initializeEngine, stopEngine } from './game'
import './styles/main.scss'

window.onload = () => {
  initializeEngine()
}

window.onclose = () => {
  stopEngine()
}
