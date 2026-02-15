import React, { useState, useRef, useEffect } from 'react';
import { config } from '../utils/constants';
import SetAvailiability from './SetAvailiability';
import TranslateLanguage from './TranslateLanguage';
import NotificationDropdown from './NotificationDropdown';
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default function RightNavbar() {
    return (
        <>
            <div className="app-header--pane mobile_profile">
                <ul className="not_list">
                    <li className="mob_search">
                        <button className="cursor">
                            <img src={`${config.AMAZON_ASSETS_URL}avatars/searchmob.svg`} alt="Search mob" className="imgcamera_pro" />
                        </button>
                    </li>

                    <li className="setavail_li">
                        <SetAvailiability />
                    </li>
                    <li>
                        <TranslateLanguage />
                    </li>
                    <li>
                        <div className="tootip_div">
                            <button id="datklight" className="darklight_btn">
                                <img
                                    src={`${config.AMAZON_ASSETS_URL}avatars/dark.svg`}
                                    alt=""
                                // onClick={handleToggleTheme}
                                />
                            </button>
                            <h4 className="tip_text">Switch to dark theme</h4>
                        </div>
                    </li>
                    <li>
                        <NotificationDropdown />
                    </li>
                    <li>
                        <div className="tootip_div">
                            <UncontrolledDropdown tag="div" className="not_drop">
                                <DropdownToggle className="pro_popover" id="PopoverExampleBasic4">
                                    <img src="https://dkscore.b-cdn.net/avatar/dharmender-arora-dkscore_1759918638398.png" className="rounded-circle" alt="" />
                                </DropdownToggle>
                                <DropdownMenu className="popover_margin">

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <h4 className="tip_text">Profile</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}