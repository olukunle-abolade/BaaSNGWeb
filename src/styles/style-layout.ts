"use client"

import { COLORS, SIZES } from "@/assets/theme/theme"
import styled from "styled-components"

export const LayoutWrapper = styled.div `
    color: ${COLORS.kwhite}
`

export const LayoutContent = styled.div `
    padding: .5rem .5rem 0  calc(${SIZES.sidebar} + .5rem);
    background: ${COLORS.kbackground};
    min-height: 100vh !important;
`

export const LayoutContentMain = styled.div<{active: any}> `
    min-height: 100vh;
    padding: ${props => props.active ? `1.2rem 2rem` : ""};
    padding-top: 15vh;
`

export const AuthFlowLayoutContainer = styled.div `
  height:100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: ${COLORS.kwhite}
`