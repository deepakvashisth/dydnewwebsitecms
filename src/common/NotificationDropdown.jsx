import React, { useState, useRef, useEffect } from 'react';
import { DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import { config } from '../utils/constants';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from "clsx";
import PublicNotificationsDropdown from './PublicNotificationsDropdown';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export default function NotificationDropdown() {
    const [activeTab, setActiveTab] = useState("1");
    const toggleTab = (tab) => setActiveTab(tab);
    return (
        <>
            <div className="tootip_div">
                <UncontrolledDropdown tag="div" className="not_drop">
                    <DropdownToggle id="notification" className="not_drop_close">
                        <div className="hoverpara">
                            <span>8</span>
                            <div className="fillnot_div">
                                <img src={`${config.AMAZON_ASSETS_URL}avatars/nothead.svg`} className="nothead" alt="" />
                                <img
                                    src={`${config.AMAZON_ASSETS_URL}avatars/notheadblue.svg`}
                                    className="notheadblue"
                                    alt=""
                                />
                            </div>
                        </div>
                    </DropdownToggle>

                    <DropdownMenu className="notfication_dropdwon notfication_dropdwon2">
                        <div className="scroll-area scrollarea_not">
                            <PerfectScrollbar options={{ suppressScrollX: true }}>
                                <div className="notfication_card">
                                    <ul className="not_popup_head">
                                        <li>
                                            <h5>Notifications</h5>
                                        </li>
                                    </ul>

                                    <div className="nav-line-alt nav-tabs-primary mb-1 ">
                                        <Nav className="nav-line navtag_add2 planet_con_list2 not_pulic_pad">
                                            <NavItem>
                                                <NavLink
                                                    className={clsx({ active: activeTab === "1" })}
                                                    onClick={() => toggleTab("1")}
                                                >
                                                    <span className="font-size-md font-weight-bold text_adim">
                                                        General
                                                    </span>
                                                    <div className="divider" />
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="refresh_grow">
                                                <NavLink
                                                    className={clsx({ active: activeTab === "2" })}
                                                    onClick={() => toggleTab("2")}
                                                >
                                                    <span className="font-size-md font-weight-bold text_adim">
                                                        For You
                                                    </span>
                                                    <div className="divider" />
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="refresh_list_ch">
                                                <button
                                                    className="refresh_icon"
                                                // onClick={() => onClickFunc()}
                                                >
                                                    <FontAwesomeIcon icon={faRedo} className="fa-spin" />
                                                    
                                                </button>
                                            </NavItem>

                                        </Nav>
                                    </div>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <PublicNotificationsDropdown />
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <h2>demo 2</h2>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </DropdownMenu>
                </UncontrolledDropdown>
                 <h4 className="tip_text">Notification</h4>
            </div>
        </>
    )
}