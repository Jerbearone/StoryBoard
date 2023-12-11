import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import DraggableElement from './components/DraggableElement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainrootview'>
      <div>
        <h1>Storyboard</h1>
        <Home></Home>
      </div>
    </div>
    </>
  )
}

export default App
