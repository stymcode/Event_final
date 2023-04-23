import React, { useState, useEffect } from 'react';
const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
          >
      <div className='container mx-auto'>
        <div className='flex justify-between items-rigft'>
          {/* logo */}
          <a href='#'>
            <img className='h-6 lg:h-8' alt='' />
          </a>
          {/* menu icon */}
      
        </div>
      </div>
    </header>
  );
};

export default Header;
