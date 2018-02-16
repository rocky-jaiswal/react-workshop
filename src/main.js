import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting';
import Messages from './Messages';

const messages = [
    { name: 'foo' },
    { name: 'bar' }
]

ReactDOM.render(
  <div>
    <Greeting />
    <Messages messages={messages}/>
  </div>,
  document.getElementById('root')
)
