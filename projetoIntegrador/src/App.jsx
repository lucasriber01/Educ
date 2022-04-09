import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Table } from './Components/Table'
import { Home } from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
    
  )
}

export default App
