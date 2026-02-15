import React, { useState, useRef, useEffect } from 'react';
import { FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap';
import { config } from '../utils/constants';


export default function Search() {
    const assetUrl = `${config.AMAZON_ASSETS_URL}`;
    return (
        <>
            <FormGroup>
                <InputGroup className="input-group-seamless input_group_brd_wid">
                    <Input
                        placeholder="Search Customers, Research, Mundane and Public profiles…"
                        className="rounded-pillnew search_rt_ad placeholder-animation"
                        autoComplete="off"
                        type="text"
                        id="searchmain"

                    />
                    <button className="mobbtnsearch">
                        Search
                    </button>
                    <div className="input-group-append searchright">
                        <InputGroupText>
                            <img
                                className="mainsearchicon searchdefault"
                                src={`${config.AMAZON_ASSETS_URL}avatars/searchmaincol.svg`}
                                alt="Search Icon"
                            />
                        </InputGroupText>
                    </div>
                    <ul
                        style={{ zIndex: 9 }}
                        className="search_history_state"
                    >
                        <li>
                            <button>
                                <img src={`${config.AMAZON_ASSETS_URL}avatars/crosstag.svg`} alt="Clear Search" />
                            </button>
                        </li>
                        <li className='state_pad'>
                            <span>|</span>
                        </li>
                        <li>
                            <button>
                                 <img src={`${config.AMAZON_ASSETS_URL}avatars/searccirclemain.svg`} className='searchstate' alt="Search" />
                            </button>
                        </li>

                    </ul>
                </InputGroup>
            </FormGroup>
        </>
    )
}