import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import snsLogo from '../assets/sns.png';

const Nav: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openSideBar]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden z-10 md:flex h-16 sticky top-0 shadow-md p-4 px-16 rounded-[60px] bg-white bg-opacity-50 mt-4 mx-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <img src={snsLogo} alt="SNS Logo" className="w-auto h-14 object-contain" />
        </div>
      </nav>

   

      {/* Mobile Top Bar */}
      <nav className="p-2 px-4 shadow-sm w-full z-50 flex md:hidden flex-row items-center justify-between bg-white">
        <img src={snsLogo} alt="SNS Logo" className="w-auto h-12 object-contain" />
      
      </nav>

      {/* Content for Nested Routes */}
      <Outlet />
    </>
  );
};

export default Nav;