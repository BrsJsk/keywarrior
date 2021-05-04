import ReactDOM from 'react-dom'
import { App } from './components/App'

export const initializeSidebar = () => {
  const mountNode = document.getElementById('side_content')
  ReactDOM.render(<App />, mountNode)
}
