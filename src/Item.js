import React, { useEffect } from 'react'

export default function Item({ item, color, setColor }) {

  console.log(color)
  return (
    <>
      <div className="container" >
        <h1 onClick={() => setColor(!color)} className={color ? 'title-1' : 'title-2'}>{item.title}</h1>
        <img src={item.image} alt={item.image} />
        <p className="title-1">{item.description}</p>
      </div>
    </>
  )
}
