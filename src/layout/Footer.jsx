import React, { useState } from 'react';
import { Nav, NavItem } from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";

export default function Footer() {
    return (
        <>
            <div className="app-footer text-black-50">
                <div className="app-footer--first">
                    <Nav>
                        <NavItem>
                            <NavLinkStrap href="#" className="rounded-sm">
                                Analytics
                            </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                            <NavLinkStrap href="#" className="rounded-sm">
                                Statistics
                            </NavLinkStrap>
                        </NavItem>

                        <NavItem>
                            <NavLinkStrap href="#" className="rounded-sm">
                                Social media Analytics
                            </NavLinkStrap>
                        </NavItem>

                    </Nav>
                </div>

                <div className="app-footer--second">
                    © 2025 All rights reserved. Powered by DKSCORE.
                </div>
            </div>
        </>
    )
}