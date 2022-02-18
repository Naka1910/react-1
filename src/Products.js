import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Prooducts() {
  const [products, setProducts] = useState([])
  const [color, setColor] = useState(true)
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
          <Item key={index} item={item} color={color} setColor={setColor} />
        ))
      }
    </div>
  )
}