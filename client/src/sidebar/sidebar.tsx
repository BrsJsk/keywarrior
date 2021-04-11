import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

export const initializeSidebar = () => {
  console.log('initializeSidebar')

  var mountNode = document.getElementById('side_content')
  ReactDOM.render(<HelloMessage name="Jane" />, mountNode)
}
