import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'intro' },
    { title: 'My Skills', to: 'skill' },
    { title: 'Training', to: 'training-container' },
    { title: 'Projects', to: 'projects-container' },
    { title: 'Certification', to: 'certificates-container' },
    { title: 'Education', to: 'education-container' },
    { title: 'Contact', to: 'contact-container' },
  ];
  const PDF_FILE_URL = '/Ranjith_CV_2025.pdf';
  const downloadFileAtURL=(url)=>{
    fetch(url).then(response=>response.blob()).then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName=url.split('/').pop()
    const aTag=document.createElement('a')
    aTag.href=blobURL
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
    })
    
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className="logo-wrapper">
          <img src={logo} alt='Logo' className='logo' />
        </div>

        {/* Desktop Menu */}
        <div className='desktopMenu'>
          {menuItems.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              spy 
              smooth 
              offset={-70} 
              duration={500} 
              className='desktopMenuListItem'
            
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <button className='desktopButton' onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
          <img src={contact} alt='Contact' className='desktopMenuImg' /> 
          <span>Download Resume</span>
        </button>

        {/* Mobile Menu Button */}
        <button className='mobileMenuBtn' onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobileMenu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              offset={-70}
              duration={500}
              className='mobileMenuListItem'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <div className="mobileButtonContainer">
            <button className="mobileButton" onClick={() => downloadFileAtURL(PDF_FILE_URL)}>
              <img src={contact} alt="Contact" className="mobileMenuImg" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;