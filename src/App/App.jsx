import { useState } from 'react'
import Header from '../Header/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pi1 font-sans body'>
     <Header />
    </div>
  )
}

export default App
