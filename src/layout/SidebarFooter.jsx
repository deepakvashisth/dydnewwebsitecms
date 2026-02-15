import React from 'react';
import { config } from '../utils/constants';


export default function SidebarFooter() {
    return (
        <>
            <div className="menu_footer">
                <div className="loveastrologer">
                    <h5>
                        <span className="love_ci"></span>{" "}
                        <span className="astro_num">
                            10 LIVE Astrologer
                        </span>
                    </h5>
                </div>

                <button

                    className="leave_feedback_btn"
                >
                    <img
                        src={`${config.AMAZON_ASSETS_URL}avatars/feeback.svg`}
                        className="astrodasboard"
                        alt=""
                    />
                    <span className="feedback_text"> Leave feedback</span>
                </button>

            </div>
        </>
    )
}