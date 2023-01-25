import React from 'react'

export default function Card({ src, text }) {
  console.log(src)
  return (
    <div className="card">
      <img className="cardImg" src={src} alt={text} />
      <span>{text}</span>
    </div>
  )
}
