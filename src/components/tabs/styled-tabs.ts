'use client'

import { COLORS, SIZES } from "@/assets";
import styled, { css } from "styled-components"

export const TabHeaderContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${COLORS.kwhite};
  border-radius: 3px;
`

export const StylizedTab = styled.button<{active: any, inactiveStyle: any}>`
    color : #FFF;
  width: 100%;
  // padding: 18px 0px;
  height: 40px;
  font-size: 1.25rem;
  background-color:  ${COLORS.kgrey};
  border: none;
  font-size: ${SIZES.body5};
  color: ${COLORS.kblackCom};
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) => 
    p.active && css `
      color: white;
      background: ${COLORS.primary};
      border-radius: 0px;
      `
  }
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div<{active: any}> `
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 4rem;
  background: #FFFFFF;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const TabsHolder = styled.div `
  display: flex;
`

export const inactiveTab = {
  // opacity: 0.65
}