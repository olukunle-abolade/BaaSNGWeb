import { SIZES } from "@/assets";
import styled  from "styled-components";

export const SidebarWrapper = styled.div `
    min-width: ${SIZES.sidebar};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #FFFFFF;

    .hmo_logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        h2{
            font-size: 20px;
            line-height: 30px;
            font-weight: 500;
            margin-left: 8px;
        }
    }
    
    .hmo_logo-Icon{
        font-size: 24px;
    }
`  