import { useState } from "react"
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

  // function getData() {
  //   axios.get('https://retoolapi.dev/FNoduP/products')
  //     .then(response => {
  //       setProducts(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

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
      {/* {
        products.map((item, index) => (
          <div className="container" key={index}>
            <h1 className="title-1">{item.title}</h1>
            <img className="img" src={item.image} alt={item.image} />
          </div>
        ))
      } */}
    </div>
  )
}