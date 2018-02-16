import React from 'react'
import ReactDOM from 'react-dom'

const someComponent = (props) => (
  <div>
    {props.items.map((item, idx) => (
      <p id={idx}>{item.name}</p>
    ))}
  </div>
)

ReactDOM.render(
  <div>
    <p>Hello JSX</p>
    {someComponent({
      items: [
        { name: 'foo' },
        { name: 'bar' }
      ]
    })}
  </div>,
  document.getElementById('root')
)
