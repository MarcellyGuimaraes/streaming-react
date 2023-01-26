import React from 'react'

export default function Card({ src, text }) {
  console.log(src)
  return (
    <div className="m-4 pb-16 w-44 h-80">
      <img src={src} alt={text} />
      <span className="m-4 text-center">{text}</span>
    </div>
  )
}
