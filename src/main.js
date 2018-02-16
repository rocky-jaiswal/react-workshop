import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './Clock'

const messages = [
    { name: 'foo' },
    { name: 'bar' }
]

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
