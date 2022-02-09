import { useState } from 'react'

export default function Counter() {
  let [currentValue, setCurrentValue] = useState(0)

  let number = 0
  function increase() {

  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={increase}>Submit </button>
    </div>
  )
}   