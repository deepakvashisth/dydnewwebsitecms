import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../utils/constants.js'
import SidebarLogo from '../layout/SidebarLogo.jsx';
import SidebarMenuList from '../layout/SidebarMenuList.jsx';
import SidebarFooter from '../layout/SidebarFooter.jsx';

function Sidebar({ open, setOpen, appsidebarcollapse }) {
  const location = useLocation();

  return (
    <>
      <div>      {/* Sidebar */}
        <div className={`app-sidebar app-sidebar--dark sidebar ${open ? 'open' : ''}`}>

         <SidebarLogo appsidebarcollapse={appsidebarcollapse} />

         <SidebarMenuList setOpen={setOpen} location={location} />
        <SidebarFooter />
          
        </div>
      </div>

      {/* Overlay when sidebar is open on small screens */}
      {open && <div className={`app-sidebar-overlay app-sidebar-overlay_custom ${open ? 'is-active' : ''}`} onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
