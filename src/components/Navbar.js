import React, { useState, useRef, useEffect } from 'react';
import clsx from "clsx";
import { config } from '../utils/constants';
import Search from '../common/Search';
import RightNavbar from '../common/RightNavbar';
function Navbar({ toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <div className="app-header--pane hambruger_reverse navbar">
        <button className={clsx(
          "navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn toogle_overflow",
          { "is-active": toggleSidebar }
        )} onClick={toggleSidebar}>
          <span className="hamburger-box">
            <img
              src={`/assets/images/avatars/hambruger.svg`}
              className="hambruger"
              alt="hambruger"
            />
          </span>
        </button>
        <div className="desk_searchmenu">
          <div className='app-header-menu'>
            <div className="appheader_flex">
            
                <Search />
            
            </div>
          </div>





        </div>

      </div>
      <RightNavbar />
    </>
  );
}

export default Navbar;
