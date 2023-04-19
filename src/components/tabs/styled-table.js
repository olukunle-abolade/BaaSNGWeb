import styled, { css } from "styled-components"
import { COLORS, SIZES } from "../../assets/theme/theme";

export const TabContainer = styled.div `
    display: flex;
    justify-content: space-between;
    // padding: 2px;
`

export const TabPanelContainer = styled.div `
//  height: 100%;
`

export const TabHeaderContainer = styled.div `
    display: flex;
    // width: fit-content;
    flex-direction: column;
    // width: 100%;
    // background: ${COLORS.kwhite};
    // border-radius: 3px;
    width: 50%;
    margin-bottom: -20px;
`

export const StylizedTab = styled.button `
    color : #FFF;
    width: 100%;
    // padding: 18px 0px;
    height: 40px;
    font-size: 1.25rem;
    background-color:  transparent;
    border: none;
    font-size: ${SIZES.body5};
    color: ${COLORS.kblackCom};
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) => 
        p.active && css `
            color: ${COLORS.kprimary};
            border-bottom: 2px solid ${COLORS.kprimary};
        `
    }
    ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div `
    display: ${(p) => (p.active ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 100%;

    .my-chat{
        height: 375px!important;
        display: flex;
        flex-direction: column;
    }

    .sideBar{
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #18191a  #18191a;
    }
    
    .sideBar::-webkit-scrollbar{
        width: 8px;
    }
    
    .sideBar::-webkit-scrollbar-track{
        border: 1px solid var(--grey3);
        border-top: none;
        border-left: none;
        border-bottom: none;
    }
    
    .scrollbar::-webkit-scrollbar-track:hover{
        background: #242526;
    }
    
    .sideBar:hover::-webkit-scrollbar-thumb{
        background: #C4C4C4;
        border-radius: 23px;
        height: 4px;
    }
`

export const TabsHolder = styled.div `
    display: flex;
    // width: 90px;
`

export const inactiveTab = {
    // opacity: 0.65
}

export const TabPanelFixed = styled.div `
    height: 300px!important;
    display: flex;
    flex-direction: column;
    background: red;
`