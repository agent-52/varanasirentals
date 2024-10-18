import { useState } from 'react'
import Header from '../Header/Header'

import './App.css'
import Button from '../Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-sans body'>
     <Header />
     <section className='page1'>
        <div className='pi1 flex alignC h90'>
          <div className='flexC gap1'>
            <div className='rental text-sm font-medium1 noWrap'>CAR RENTAL</div>
            <h1 className='text-large'>Rent Cars in Varanasi</h1>
            <h3 className='text-medium1 maxW45ch'>From DZIRE  to MERCEDES, We got everything you may need in our extensive Fleet of cars</h3>
            <p className='text-sm1'>With more than 100000+ Happy customers, We provide the  <strong> Best Car rental service in Varanasi</strong></p>
            <Button text="Rent Now" classArray='text-sm1 button2 font-light'/>
          </div>
        </div>
     </section>
    </div>
  )
}

export default App
