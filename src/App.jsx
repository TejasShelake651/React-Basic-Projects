import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordGen from './PasswordGen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordGen/>
    </>
  )
}

export default App
