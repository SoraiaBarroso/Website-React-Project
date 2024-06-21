import React, {useState} from 'react' 
import "./Navbar.css"
import { DiOpenshift } from "react-icons/di"
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"

const Navbar = () => {
  // state variable 
  const [showMenu, setShowMenu] = useState(false);

  // if we click one icon it will change for the other icon
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  // Navigation items array
  const navItems = [
      { href: '#', label: 'Home' },
      { href: '#features', label: 'Features' },
      { href: '#download', label: 'Download' },
      { href: '#subscribe', label: 'Subscribe' },
      { href: '#faq', label: 'Get Started' },
  ];

  return (
    <nav className='container navbar'>
      <div className='logo'>
        <DiOpenshift color='white' size={55} />
        <p className='logo-text'>Tech<span>X</span></p>
      </div>
      <ul className='nav-list' id={showMenu === true ? "nav-list-mobile" : "nav-list-mobile-hide"}>
      {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className='menu-icons' onClick={toggleMenu}>
        {
          // if showMenu == false, we display burger otherwise close icon
          showMenu === false ? <AiOutlineBars color='white' size={27}/> : <RiCloseLine color='white' size={30}/> 
        }
      </div>
    </nav>
  )
}

export default Navbar
