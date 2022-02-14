import { useEffect, useState } from "react"
import './Counter.css';

export default function Counter() {
  const [value, setValue] = useState(10)
  const [title, setTitle] = useState('')

  // useEffect(() => {
  //   let sint = setInterval(() => {
  //     console.log('test ' + value);
  //     setValue(value + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(sint)
  //   }
  // }, [])
  function handleClick() {
    const newValue = value + 1;
    setValue(newValue);

  }
  function updateTitle() {
    setTitle('Current value is ' + value)
  }

  return (
    <div>
      <p>{value}</p>
      <p>{title}</p>
      <button className="button" onClick={handleClick} >submit</button>
      <button className="button" onClick={updateTitle} >submit</button>
    </div>
  )
}