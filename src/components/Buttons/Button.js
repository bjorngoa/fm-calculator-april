import React from 'react'

export default function Button({ className, value, key, handleClick }) {
  return (
    <button key={key} className={className} onClick={(e) => handleClick(e)}>
      {value}
    </button>
  )
}