import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/780221923.jpg';
import { Home, User, Menu, X, HeartHandshake } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  
  const handleDonateClick = () => {
    if (location.pathname === '/') {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="py-4 bg-gradient-to-br from-yellow-50 to-amber-50 px-8 md:sticky md:top-0 shadow-md z-50 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 font-bold text-2xl">
          <img src={logo} alt="logo" height="50px" width="50px" />
          <div className="border-b-4 border-yellow-400">Ek-Prayass</div>
        </div>

        
        <div className="hidden md:block">
          <ul className="flex gap-5">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="/project">Projects</Link>
            </li>
            <li className="p-2">
              <Link to="/notice">Notice</Link>
            </li>
            <li className="p-2">
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li className="p-2">
              <Link to="/team">Our Team</Link>
            </li>
            
            <li className="p-2">
              <button
                onClick={handleDonateClick}
                className="text-white hover:scale-105 transition-all duration-300 font-semibold bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg p-3"
              >
                Donate
                <HeartHandshake className="inline-block ml-2" size={20} />
              </button>
            </li>
          </ul>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-2">
            <li className="p-2">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="p-2">
              <Link to="/project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="p-2">
              <Link to="/notice" onClick={toggleMenu}>
                Notice
              </Link>
            </li>
            <li className="p-2">
              <Link to="/volunteer" onClick={toggleMenu}>
                Volunteer
              </Link>
            </li>
            <li className="p-2">
              <Link to="/team" onClick={toggleMenu}>
                Team
              </Link>
            </li>
           
            <li className="p-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleDonateClick();
                }}
                className="text-yellow-600 font-semibold bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg p-3 w-full"
              >
                Donate
                <HeartHandshake className="inline-block ml-2" size={20} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
