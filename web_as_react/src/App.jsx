import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sumaPrimos, setSumaPrimos] = useState(0)
  const cardRef = useRef();

  function esPrimo(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  function nuevonumero() {
    let valornuevo = count + 1
    while (!esPrimo(valornuevo)) {
      valornuevo++
    }
    setCount(valornuevo)
    setSumaPrimos((prev) => prev + valornuevo)
  }

    useEffect(() => {
    if (cardRef.current) {
      const height = count
      cardRef.current.style.height = `${height}px`
      cardRef.current.style.width = `50px`
      cardRef.current.style.backgroundColor = 'green'
    }
  }, [count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
        <div className="card">
          <button onClick={nuevonumero}>
            count is {count}
          </button>
          <label>
            La suma de los números primos es {sumaPrimos}
          </label>
        </div>

        {}
        <div ref={cardRef}>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App