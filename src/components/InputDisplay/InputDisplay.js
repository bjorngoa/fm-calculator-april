import React from 'react'

export default function CalcInputDisplay({ className, value }) {
  const { number, result } = value

  return <h2 className={className}>{number ? number : result}</h2>
}