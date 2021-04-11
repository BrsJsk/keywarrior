import '@babel/polyfill'
import { initializeSidebar } from './sidebar'
import './styles/main.scss'

window.onload = () => {
  initializeSidebar()
}
