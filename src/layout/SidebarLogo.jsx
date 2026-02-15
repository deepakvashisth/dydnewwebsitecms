import React from "react";
import { config } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { UncontrolledTooltip } from "reactstrap";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";

export default function SidebarLogo({ appsidebarcollapse }) {
  return (
    <>
      <div className="app-sidebar--header app-sidebar--header_pad">
        <div className="app-sidebar-logo">
          <div className="app-sidebar-logo app-sidebar-logo2 app-sidebar--header_mob">
            <img
              className="dkloganimation dkloganimation_noncollapse"
              alt="Decide Your Destination"
              src={`${config.AWS_IMAGE_BASE_URL}logo.png`}
            />

            <img
              className="dkloganimation_collapse"
              alt="Decide Your Destination"
              src={`${config.AWS_IMAGE_BASE_URL}logo.png`}
            />
            <button
              onClick={appsidebarcollapse}
              className="btn btn-sm collapse-sidebar-btn"
              id="CollapseSidebarTooltip"
            >
              <FontAwesomeIcon icon={faDotCircle} />
            </button>
            <UncontrolledTooltip
              target="CollapseSidebarTooltip"
              container=".app-sidebar"
              placement="right"
            >
              Collapse sidebar
            </UncontrolledTooltip>

            <button
              onClick={appsidebarcollapse}
              className="expand-sidebar-btn btn btn-sm"
              id="ExpandSidebarTooltip"
            >
              <FontAwesomeIcon icon={faArrowsLeftRight} />
            </button>
            <UncontrolledTooltip
              target="ExpandSidebarTooltip"
              container=".app-sidebar"
              placement="right"
            >
              Expand sidebar
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
    </>
  );
}
