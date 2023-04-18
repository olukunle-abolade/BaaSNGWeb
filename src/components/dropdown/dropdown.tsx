"use client"

import React, {useRef} from 'react'
import { DropDownContent, DropDownFooter, DropDownToggle, DropDownToggleBadge, DropDownWrapper } from './style-dropdown';
import {IoNotificationsOutline} from "react-icons/io5"
import { COLORS } from '../../assets/theme/theme';



const isBrowser = typeof window !== "undefined";

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
    isBrowser ? 
    document.addEventListener("mousedown", (e) => {
        // user click toggle
        if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active")
        }else {
            // user click outside toggle and content
            if(content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active');
            }
        }
    }) : null
}

interface IDropdown {
  icon?: any;
  customToggle?: any;
  [x: string]: any;
  badge?: boolean;
}

const Dropdown: React.FC<IDropdown> = ({icon, customToggle, badge, ...props})=> {

    const dropdown_toggle_el = useRef(null);
    const dropdown_content_el = useRef(null);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <>
            <DropDownWrapper>
                <DropDownToggle ref = {dropdown_toggle_el}>
                    {
                        icon ? <IoNotificationsOutline style={{
                            fontSize: 25,
                            color: COLORS.kgrey,
                            
                        }} /> : ""
                    }
                    {
                      badge && <DropDownToggleBadge ></DropDownToggleBadge> 
                    }
                    {
                        customToggle ? customToggle() : ""
                    }
                </DropDownToggle>
                <DropDownContent ref = {dropdown_content_el}>
                    {
                        props.contentData && props.renderData ? props.contentData.map((item: any, index: any) =>
                            props.renderData(item, index)
                        ) : ""
                    }
                    {
                        props.renderFooter ? (
                            <DropDownFooter>
                                {
                                    props.renderFooter()
                                }
                            </DropDownFooter>
                        ) : ""
                    }
                </DropDownContent>
            </DropDownWrapper>
        </>
    )
}

export default Dropdown