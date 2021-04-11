import ReactDOM from 'react-dom'
import { Sidebar } from './components/Sidebar'

export const initializeSidebar = () => {
  const mountNode = document.getElementById('side_content')
  ReactDOM.render(<Sidebar />, mountNode)
}
