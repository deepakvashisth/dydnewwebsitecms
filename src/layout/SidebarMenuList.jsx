import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { NavLink } from 'react-router-dom';
import { config } from '../utils/constants';


export default function SidebarMenuList({setOpen, location}) {
    return (
        <>
            <div className='app-sidebar--content app-sidebar_mar'>
                <PerfectScrollbar options={{ suppressScrollX: true }}>
                    <div className="sidebar-navigation sidebar-navigation_custom">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={location.pathname === '/' ? 'active' : ''}
                                    onClick={() => setOpen(false)}
                                >
                                    <img
                                        src={`${config.AMAZON_ASSETS_URL}avatars/home3.svg`}
                                        className="astrodasboard"
                                        alt=""
                                    />
                                    <img
                                        src={`${config.AMAZON_ASSETS_URL}avatars/homewhite.svg`}
                                        className="astrodasboardwhite"
                                        alt=""
                                    />
                                    <span className="navbar_menutitle">Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/customers"
                                    className={location.pathname === '/customers' ? 'active' : ''}
                                    onClick={() => setOpen(false)}
                                >
                                    <img
                                        src={`${config.AMAZON_ASSETS_URL}avatars/myprofile6.svg`}
                                        className="astrodasboard"
                                        alt=""
                                    />
                                    <img
                                        src={`${config.AMAZON_ASSETS_URL}avatars/myprofile6white.svg`}
                                        className="astrodasboardwhite"
                                        alt=""
                                    />
                                    <span className="navbar_menutitle">My Public Profile</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    )
}