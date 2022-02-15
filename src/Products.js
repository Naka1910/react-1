import { useEffect, useState } from "react";
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([])

  function getData() {
    axios.get('https://retoolapi.dev/FNoduP/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {
        products.map((item, index) => (
          <div className="container" key={index}>
            <p>{item.id}</p>
            <h1 className="title-1">{item.title}</h1>
            <p className="title-1">{item.price}</p>
            <img className="img" src={item.image} alt={item.image} />
            <p className="title-1">{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}