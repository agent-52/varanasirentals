import "./Header.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import { HashLink } from 'react-router-hash-link';
import logo from "/images/logos/logo3.png"

import backArrow from "/images/logos/arrow.png"
const Header = () =>
{
  const [navVisibility, setNavVisibility] = useState(false)
  function updateNavVisibilty(){
    if(navVisibility == true){
      setNavVisibility(false)
      document.querySelector(".navBarMobile").classList.add("navHidden")
      console.log("hidden")
    }else{
      setNavVisibility(true)
      document.querySelector(".navBarMobile").classList.remove("navHidden")
      console.log("visible")
    }
  }

  return(
    <div>
    <div className="header noWrap">
      <Link className="textDecNone" to="/">
        <div className="flex gap00 alignC">
          <div className="imgBox1"><img src={logo} alt="varanasi rentals logo" /></div>
          <h1>Varanasi <span className="text-pink">Rentals</span></h1>
        </div>
      </Link>
      <div className="navDesktop text-black-a9 text-sm1 flex gap2_5">
        
        <HashLink to="/#CarsRental" className="textDecNone"><div className="font-medium1 text-sm1 ">Rental Cars </div></HashLink>
        <HashLink smooth to="/#TampoRental" className="textDecNone"><div className="font-medium1 text-sm1">Bus/Tampo</div></HashLink>
        <Link to="/travelPackages" className="textDecNone"><div className="font-medium1 text-sm1">Tours & Packages</div></Link>
        <Link to="/about" className="textDecNone"><div className="font-medium1 text-sm1">About</div></Link>
      </div>
      
    </div>

    <div className="header2">
      <Link className="textDecNone" to="/">
        <div className="flex gap00 alignC">
          <div className="imgBox1"><img src={logo} alt="varanasi rentals logo" /></div>
          <h1>Varanasi <span className="text-pink">Rentals</span></h1>
        </div>
      </Link>
      <div className="navMobile" onClick={updateNavVisibilty}>
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </div>

    <div className="navBarMobile navHidden " >
      <div className="navMobile cross" onClick={updateNavVisibilty}>
        <div className="imgBox2"><img src={backArrow} alt="" /></div>
        
      </div>
      <Link to="/" className="textDecNone"><div className="text-medium2" onClick={updateNavVisibilty}>Home</div></Link>
      {/* <Link to="/about" className="textDecNone"><div className="text-medium">About</div></Link> */}
      <HashLink to="/#CarsRental" className="textDecNone"><div className="text-medium2">Rental Cars </div></HashLink>
      <HashLink smooth to="/#TampoRental" className="textDecNone"><div className="text-medium2">Bus/Tampo</div></HashLink>
      <Link to="/tours" className="textDecNone"><div className="text-medium2">Tours & Packages</div></Link>
      <Link to="/about" className="textDecNone"><div className="text-medium2">About</div></Link>
      
      
    </div>

    </div>

    
  )
}

export default Header