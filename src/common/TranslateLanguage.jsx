import React, { useState, useRef, useEffect } from 'react';
import { config } from '../utils/constants';

export default function TranslateLanguage() {
    return (
        <>
            <div className="tootip_div">
                <div id="chlang" className="lan_current lang_option">
                    <span className="lang_name">
                        English
                    </span>
                    <div id="chlang" className="lang_option">
                        <img src={`/assets/images/avatars/language.svg`} alt="Language" className="lang_option_icon" />
                    </div>
                    <div
                        id="google_translate_element"
                        className="Lang_translate notranslate"
                    ></div>
                </div>
                <h4 className="tip_text">Change Language</h4>
            </div>
        </>
    )
}