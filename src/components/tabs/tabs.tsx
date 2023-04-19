'use client'

import React from "react"
import {
    TabHeaderContainer,
    StyledTabPanel,
    StylizedTab,
    TabsHolder,
    inactiveTab
} from './styled-tabs'

interface ITab {
  label: string;
  active: any;
  onClick: () => void;
}

interface ITabs {
  selectedTab: any;
  onChange: any;
  children: any;
}

interface ITabPanel {
  selectedIndex: any;
  value: any;
  children: any;
}

export const Tab: React.FC<ITab> = ({label, active, onClick}) => {
    return (
        <StylizedTab
            role= "tab"
            active= {active}
            onClick = {onClick}
            inactiveStyle = {inactiveTab}
        >
            {label}
        </StylizedTab>
    )
}

export const TabS: React.FC<ITabs> = ({selectedTab, onChange, children}) => {
    const tabs = children.map((child: any) => {
        const handleClick = (e: any) => {
            onChange(e, child.props.value);
        }

        return React.cloneElement(child, {
            active: child.props.value === selectedTab,
            onClick: handleClick
        });
    });
    return (
        <TabHeaderContainer>
            <TabsHolder>
                {tabs}
            </TabsHolder>
        </TabHeaderContainer>        
    )
}

export const TabPanel: React.FC<ITabPanel> = ({children, value, selectedIndex }) => {
    const hidden = value !== selectedIndex;
    return (
        <StyledTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StyledTabPanel>
    )
}