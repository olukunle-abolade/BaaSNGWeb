'use client'

import styled from "styled-components";

export const MenuItemContainer = styled.div<{depth:any}>
  `
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding: 10px 30px 10px 30px;
  align-items: center;
  justify-content: space-between;
  color: #A6B0CF;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    color: #210590;
    background: #E9E6F4;
    border-radius: 8px;
    margin: 0 10px;
  }

  &.selected .icon {
    color: #210590;  
  }
`;