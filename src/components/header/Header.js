import React from 'react'
import "./Header.css"
import svgHeader from "../../assets/svg.svg"
import { BsMouse } from "react-icons/bs"


// Button template so we dont have to create it over and over again
import Button from "../UI/button/Button"

const Header = () => {
  return (
    <section id='header'>
      <div className='container header'>
        <div data-aos="fade-right" className='header-left'> 
          <h1>
            <span>INNOVATIVE WEB DEVELOPMENT</span>
            <span>DESIGNING THE WEB OF TOMORROW,</span>
            <span>TODAY</span>
          </h1>
          <p>
            TechX is lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed commodo urna vel mauris faucibus. Consectetur adipiscing elit. 
          </p>
          <div className='header-btn'>
            <Button text={"Get Started"} btnClass={"btn-light"} href={"#"}/>
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#"}/>
          </div>
        </div>
        <div data-aos="fade-left" className='header-right'>
          <img src={svgHeader} alt='Header'></img>
        </div>
        <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color='#fff' size={25} className='mouse'/>
        </a>
      </div>
      </div>
     
    </section>
  )
}

export default Header
