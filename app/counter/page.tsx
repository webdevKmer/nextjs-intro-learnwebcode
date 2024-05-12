'use client'
import React, { useState } from 'react'

const CounterPage = () => {
  const [counter, setCounter] = useState(0)

  const handleReset = () => setCounter(0)
  const handleAddTwo = () => setCounter(prev => prev + 2)
  const handleRemoveTwo = () => setCounter(prev => prev - 2)

  return (
    <>
    <div>My Counter App</div>
    <h1 className='text-5xl'>{counter}</h1>
    <button className='btn btn-primary' onClick={handleAddTwo}>+2</button>
    <button className='btn btn-success' onClick={handleReset}>0</button>
    <button className='btn btn-secondary' onClick={handleRemoveTwo}>-2</button>
    </>
  )
}

export default CounterPage