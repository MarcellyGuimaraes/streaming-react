import React from 'react'

export default function Card({ src, text }) {
  return (
    <>
      <div className="card">
        <img className="cardImg" src={src} alt={text} />
      </div>
      <span>{text}</span>
    </>
  )
}
