import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

import './App.css'
import Button from '../Button/Button'

import carfleet from "/images/carImages/carfleet1.png"
import tempofleet from "/images/carImages/carfleet3.png"
import bus1 from "/images/carImages/bus2.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='font-sans body'>
     <Header />
     <section className='page1 flex relative overflowX'>
        <div className='pi1 bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>CAR RENTAL</div>
            <h1 className='text-large'>Rent Cars in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>From DZIRE  to MERCEDES, We got everything you may need in our extensive Fleet of cars</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Car rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
          </div>
          <div className='p1Mi'><img src={carfleet} alt="cars fleet of varanasi rentals" /></div>
        </div>
        <div className='pi1  bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>TEMPO RENTAL</div>
            <h1 className='text-large'>Rent Tempo's in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>Need something bigger, We got everything you may need in our extensive Fleet of Tempos</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Tempo rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
          </div>
          <div className='p1Mi'><img src={tempofleet} alt="tempo and bus fleet of varanasi rentals" /></div>
        </div>
        <div className='pi1 bgi1 fullWidth flex alignC h100 gap2 justify-between'>
          <div className='flexC gap2'>
            <div className='rental text-sm font-medium1 noWrap'>BUS RENTAL</div>
            <h1 className='text-large'>Rent Buses in Varanasi</h1>
            <div className="flexC gap1">
              <h3 className='text-medium1 maxW45ch'>Have a big group, We got everything you may need in our extensive Fleet of Buses</h3>
              <p className='text-sm1 maxW45ch'>With more than 100000+ Happy customers, We provide the  <strong> Best Bus rental service in Varanasi</strong></p>
            </div>
            <Link className="textDecNone"><Button text="Rent Now >" classArray='text-sm1 button2 font-light'/></Link>
          </div>
          <div className='p1Mi'><img src={bus1} alt=" bus of varanasi rentals" /></div>
        </div>
     </section>
     
    </div>
    <main className='fleetPage bgGrey font-sans'>
      <div className='flexC gap1 alignC'>
        <div className='rental text-sm font-medium1 noWrap'>RENTAL COLLECTION</div>
        <h1 className='text-medium'>Our Fleet Collection</h1>
      </div>
    </main>
    </>
  )
}

export default App
