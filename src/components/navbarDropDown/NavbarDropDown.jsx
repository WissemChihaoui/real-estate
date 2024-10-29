import React, { useRef, useState, useEffect } from 'react';
import './NavbarDropDown.scss'; // Ensure your SCSS is imported

const NavbarDropDown = ({ dropdowns }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRefs.current && !dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container">
      {dropdowns.map((dropdown, index) => (
        <div className="dropdown" key={index} ref={el => dropdownRefs.current[index] = el}>
          <button onClick={() => handleOpen(index)} className="dropdown-button">
            {dropdown.header}
          </button>
          <ul className={`dropdown-menu ${openIndex === index ? 'open' : ''}`}>
            {dropdown.menu.map((item, idx) => (
              <li key={idx} onClick={() => setOpenIndex(null)}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavbarDropDown;
