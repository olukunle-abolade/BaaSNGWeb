"use client"

import React, {useEffect, useRef} from 'react'
import { DropDownContent, DropDownFooter, DropDownHeader, DropDownToggle, DropDownToggleBadge, DropDownWrapper } from './style-dropdown';
import {IoNotificationsOutline} from "react-icons/io5"
import { COLORS } from '@/assets/theme/theme';


const isBrowser = typeof window !== "undefined";

// const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
//     document.addEventListener("mousedown", (e) => {
//       // user click toggle
//       if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
//         content_ref.current.classList.toggle("active")
//       }else {
//         // user click outside toggle and content
//         if(content_ref.current && !content_ref.current.contains(e.target)){
//           content_ref.current.classList.remove('active');
//         }
//       }
//     })
// }

interface IDropdown {
  icon?: any;
  customToggle?: any;
  [x: string]: any;
  badge?: boolean;
}

const Dropdown: React.FC<IDropdown> = ({icon, customToggle, badge, ...props})=> {

  const contentRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

    // clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    const clickOutsideRef = (e: MouseEvent) => {
      // user click toggle
      if (toggleRef.current && toggleRef.current.contains(e.target as Node)) {
        contentRef.current?.classList.toggle("active");
      } else {
        // user click outside toggle and content
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          contentRef.current.classList.remove('active');
        }
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", clickOutsideRef);
  
      return () => {
        document.removeEventListener("mousedown", clickOutsideRef);
      };
    }, []);

    return (
      <>
        <DropDownWrapper>
          <DropDownToggle ref = {toggleRef}>
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
          <DropDownContent ref = {contentRef}>
            {
              props.renderHeader ? (
                <DropDownHeader>
                  {
                    props.renderHeader()
                  }
                </DropDownHeader>
              ) : ""
              }
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