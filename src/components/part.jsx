import React from 'react'
import "./part.css"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function Part({ item, increase, decrease }) {
  return (
    <div>
      <div className="base">
        <img src={item.image} alt={item.name}></img>
        <h1>{item.name}</h1>
        <h2>{item.title}</h2>
        <h3>{item.quote}</h3>
      </div>
      <div className="btn">
        <button onClick={increase}><BsFillArrowLeftCircleFill /></button>
        <button onClick={decrease}><BsFillArrowRightCircleFill /></button>
      </div>
    </div>
  )
}

export default Part