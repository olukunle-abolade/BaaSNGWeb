import styled from "styled-components"
import { COLORS, SIZES } from "../assets/theme/theme"

export const DashCard = styled.div`
    height: 160px;
    width: 270px;
    background-color: ${COLORS.kwhite};
    box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

    .ava{
        .circleAvatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(85, 110, 230, 0.2);
            mix-blend-mode: normal;
        }
    }

    .text-green{
        padding: .1rem .3rem;
    }
`

export const ProfileDetails = styled.div`
    width: 798px;
    background-color: ${COLORS.kwhite};
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.0313726);
    border-radius: 4px;
    padding: 1rem 1rem 2.5rem 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
`

export const RightDasboardCardWrapper = styled.div `
    width: 240px;
    height: 90px;
    background: ${COLORS.kwhite};
    box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;

    .rightVisits{
        p{
            color: ${COLORS.ksecondary};
        }

        p:nth-child(2){
            color: ${COLORS.kblackCom};
            font-weight: 500;
            margin-top: 5px;
        }
    }

    .credentialConfirmationCircle{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EFF2F7;
        width: 48px;
        height: 48px;
        border-radius: 50%;
  
        .rightDashboardCircleIcon{
            font-size: 18px;
            color: ${COLORS.kprimary}
        }
    }
`

export const LeftAppointment = styled.div `
    margin-top: 1.6rem;
    h3{
        color: #000000;
        font-size: 17px;
        font-weight: 600;
    }
`;

export const AppointmentCard = styled.div `
    width: 100%;
    height: 72px;
    border-radius: ${SIZES.radiusx};
    background-color: ${COLORS.kwhite} !important;
    display: flex;
    align-items: center;
    margin-bottom: 12px;


    .appointmentCardImage{
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: ${COLORS.kprimary};
    }

    .appointmentData{
        h3{
            color: ${COLORS.kblack2};
            font-size: ${SIZES.h5};
            font-weight: 500;
        }

        div{
            display: flex;
            align-items: center;
            span:nth-child(1){
                color: #44444F;
                font-weight: 500;
                font-size: ${SIZES.body5};
            }

            span:nth-child(2){
                color: #D8D8D8;
                margin: -10px 5px 0 5px;
                // height: 8px;
            }

            span:nth-child(3){
                color: #92929D;
                font-size: ${SIZES.body5};
                font-weight: 400;
            }
        }
    }
`

export const LeftDasboardWrapper = styled.div `
    margin: 0 25px 0 25px;
`


/**============== BOOK SESSION ==================**/
export const BookSessionWrapper = styled.div  `
    h3{
        color: ${COLORS.kblackCom};
        font-size: ${SIZES.h2};
        font-weight: 600;
        margin-bottom: 20px
    }
    width: 560px;
    height: 620px;
    background: ${COLORS.kwhite};
    border-radius: ${SIZES.radiusx};
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.0313726);
    margin: 4rem auto;
    padding: 1.4rem 2rem;

    .sessionProfile {
        width: 100%;
        height: 72px;
        border-radius: ${SIZES.radiusx};
        background-color: ${COLORS.kwhite} !important;
        display: flex;
        align-items: center;


        .sessionCardImage{
            width: 84px;
            height: 84px;
            border-radius: 10px;
            background: ${COLORS.kprimary};
        }

        .sessionData{
            .name{
                color: ${COLORS.kblack2};
                font-size: ${SIZES.body1};
                font-weight: 600;
            }

            .location{
                display: flex;
                align-items: center;
                margin-top: -15px;
                span:nth-child(1){
                    color: #44444F;
                    font-weight: 500;
                    font-size: 14px;
                }

                span:nth-child(2){
                    color: #D8D8D8;
                    margin: -10px 5px 0 5px;
                }

                span:nth-child(3){
                    color: #92929D;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }

    .view_profile{
        // background: red;
        display: flex;
        align-items: center;
        .icon{
            color: ${COLORS.kprimary};
            font-size: 2.3rem;
            padding: .5rem; 
            border: 1px solid rgba(0, 98, 255, 0.15);
            border-radius: ${SIZES.radiusx};
            cursor: pointer;
        }

        button{
            color: ${COLORS.kprimary};
            font-weight: 400;
            font-size: ${SIZES.h5};
        }
    }

    .payment{
        p:nth-child(1){
            color: ${COLORS.ksecondary};
            font-weight: 500;
            font-size: ${SIZES.body5}
        }

        p:nth-child(2){
            color: ${COLORS.kblackCom};
            font-weight: 500;
            font-size: ${SIZES.font};
        }
    }

    .message{
        color: ${COLORS.kblackCom};
        font-size: ${SIZES.body5};
        font-weight: 500;
    }

    .grid {
        border-radius: 10px;

        div{
            height: 100%;
        }

        div:nth-child(1){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 10px 0px 0px 10px;
        }

        div:nth-child(2){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-left-color: transparent;
            border-right-color: transparent;
        }

        div:nth-child(3){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 0px 10px 10px 0px;
        }
    }
`

export const SearchContainer = styled.div `
    position: relative;
    input[type="text"]{
        background: ${COLORS.kwhite};
        border: none;
        outline: none;
        padding: .8rem 0 .8rem 2.8rem;
        width: 100%;
        border-radius: 30px;
        color: ${COLORS.ksecondary};
        font-size: ${SIZES.body5};

        ::placeholder,
        ::-webkit-input-placeholder {
            color: ${COLORS.ksecondary};
        }
    }

    .topnav_search{
        position: absolute;
        color: black;
        left: 1.2rem;
        top: 15px;
        color: ${COLORS.kblackCom};
    }
`

export const TabContainer = styled.div `
    display: flex;
    padding: 2px;
`

export const TabPanelContainer = styled.div `
//  height: 100%;
`

export const DateSpan = styled.h1  `
    overflow: hidden;
    text-align: center;
    color: ${COLORS.kblackCom};
    font-weight: 400;
    font-size ${SIZES.body5};

    &:before,
    &:after {
        background-color: #EFF2F7;;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }

    &:before {
        right: 1em;
        margin-left: -50%;
    }
    
    &:after {
        left: 1em;
        margin-right: -50%;
    }
`

