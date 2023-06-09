"use client"

import { COLORS, SIZES } from "@/assets/theme/theme"
import styled from "styled-components"

export const LayoutWrapper = styled.div `
  color: ${COLORS.kwhite};
  background: #F7F7F7;

`

export const LayoutContent = styled.div `
  height: 5rem;
  padding-left:calc(${SIZES.sidebar} + 1rem);
  background: #F7F7F7;
  min-height: 100vh !important;
`

export const LayoutContentMain = styled.div `
  min-height: 100vh;
  padding: 1.2rem 0rem;
  padding-top: 10vh;
  background: #F7F7F7;
`

export const AuthFlowLayoutContainer = styled.div `
  height:100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: ${COLORS.kwhite}
`