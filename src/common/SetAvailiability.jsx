import React, { useState, useRef, useEffect } from "react";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { config } from "../utils/constants";
import { Link } from "react-router-dom";

export default function SetAvailiability() {
  return (
    <>
      <UncontrolledDropdown tag="span" className="avail_dropdown">
        <DropdownToggle className="avail_feed">
          <span className="avail_color"></span>
          <span className="avail_text">Available</span>
          <span className="avai_dropaarow"></span>
        </DropdownToggle>

        <DropdownMenu className="avail_droplist">
          <ul className="availiable_stat">
            <li>
              <span className="avail_stat_green"></span>
            </li>
            <li className="avail_stat_pad">
              <h5>Available</h5>
              <h6>Based on activity</h6>
            </li>
            <li>
              <img src={`/assets/images/avatars/checktag.svg`} alt="checktag" />
            </li>
          </ul>

          <ul className="availiable_stat">
            <li>
              <span className="avail_stat_red"></span>
            </li>
            <li className="avail_stat_pad">
              <h5>Do not Disturb</h5>
              <h6>Mute chat notification</h6>
            </li>

            <li>
              <img src={`/assets/images/avatars/checktag.svg`} alt="checktag" />
            </li>
          </ul>

          <ul className="availiable_stat">
            <li>
              <span className="set_away"></span>
            </li>
            <li className="avail_stat_pad">
              <h5>Set as away</h5>
            </li>

            <li>
              <img
                src={`/assets/images/avatars/checktag.svg`}
                alt=""
              />
            </li>
          </ul>

          <ul className="availiable_stat">
            <li>
              <span className="set_offline">
                <img
                  src={`/assets/images/avatars/offlineaway.svg`}
                  alt=""
                />
              </span>
            </li>
            <li className="avail_stat_pad">
              <h5>Offline</h5>
            </li>

            <li>
              <img
                src={`/assets/images/avatars/checktag.svg`}
                alt="checktag"
              />
            </li>
          </ul>

          <ul className="avail_otheroption">
            <li>
              <Link
                to="/availability"
                onClick={() => {
                  const dropdown = document.querySelector(
                    ".avail_droplist.dropdown-menu",
                  );
                  const trigger = document.querySelector(".avail_feed");

                  if (dropdown && trigger) {
                    // Hide the dropdown
                    dropdown.classList.remove("show");

                    // Update ARIA attributes for accessibility
                    trigger.setAttribute("aria-expanded", "false");
                    dropdown.setAttribute("aria-hidden", "true");
                  }
                }}
              >
                <img
                  src={`/assets/images/avatars/availstat.svg`}
                  className="lang_option_icon"
                  alt=""
                />
                My Availablity
              </Link>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}
