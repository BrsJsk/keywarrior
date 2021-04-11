import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar } from './components/Sidebar'

export const initializeSidebar = () => {
  console.log('initializeSidebar')

  const mountNode = document.getElementById('side_content')
  ReactDOM.render(<Sidebar />, mountNode)
}
