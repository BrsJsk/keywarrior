import '@babel/polyfill'
import { initializeEngine, stopEngine } from './game'
import { initializeSidebar } from './sidebar'
import './styles/main.scss'

window.onload = () => {
  initializeSidebar()
  // initializeEngine()
}

window.onclose = () => {
  stopEngine()
}
