"use client"

import { COLORS } from "@/assets"
import styled from "styled-components"

export const DropDownWrapper = styled.div `
    position: relative;
    z-index: 10000 !important;
`

export const DropDownToggle = styled.button `
    border: 0;
    outline: 0;
    background-color: transparent !important;
    position: relative;

    i{
      font-size: 2.5rem;
      color: red; 
    }
`

export const DropDownToggleBadge = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -8px;
    right: -8px;
    height: 8px;
    width: 8px;
    border-radius: 50px;
    background-color: ${COLORS.kgreen}; //
    color: ${COLORS.kwhite};
    font-size: .8rem;
`

export const DropDownContent = styled.div `
    position: absolute;
    top: calc(100% + 5px);
    z-index: 9999 !important;
    right: 0;
    width: max-content;
    max-width: 550px;
    // width: 552px;
    background-color: ${COLORS.kwhite}; //
    box-shadow: rgba(149, 157, 165, .2) 0px 8px 24px; //
    border-radius: 2px; //
    overflow: hidden;
    transform-origin: top right;
    transform: scale(0);
    transition: transform 0.3s ease 0s;
    color: ${COLORS.secondary};

    &.active {
        transform : scale(1);
        transition: transform .5s var(--transition-cubic) ; //
    }
`

export const DropDownHeader = styled.div  `
    padding: 20px;
    color: ${COLORS.primary};
`

export const DropDownFooter = styled.div  `
    padding: 20px;
    text-align: center;
    color: ${COLORS.primary};
`


