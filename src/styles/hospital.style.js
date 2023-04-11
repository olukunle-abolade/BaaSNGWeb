import styled from "styled-components"
import { COLORS, SIZES } from "../assets/theme/theme"

export const BookSessionWrapper = styled.div  `
    width: 560px;
    background: ${COLORS.kwhite};
    border-radius: ${SIZES.radiusx};
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.0313726);
    margin: 3.5rem auto;
    padding: 1.6rem 2rem;

    .table-spacing{
        border-collapse: seperate;
        border-spacing: 0 10px !important;        
    }
    table > *:last-child > tr:last-of-type {
        border-top: 2px solid ${COLORS.kblack};
        border-bottom: 2px solid ${COLORS.kblack};
    }
    thead{
       border-top: 1px solid #EEEEEE;
       border-bottom: 1px solid #EEEEEE;
       padding: 1rem 0;

       tr{
        text-align: left;
            th, td {
                text-transform: capitalize;
                padding: 10px 10px;
                color:  ${COLORS.kblackCom};
                font-size: ${SIZES.body5};
                font-weight : 600;
            }
        }
    }

   tbody{
      color: ${COLORS.kblackCom};
      font-weight: 400;

      tr{
        text-align: left;
            th, td {
                text-transform: capitalize;
                padding: 10px 10px;
                color:  ${COLORS.kblackCom};
                font-size: ${SIZES.body5};
                font-weight : 600;
            }
        }
    }


    h3{
        color: ${COLORS.kblackCom};
        font-size: ${SIZES.h2};
        font-weight: 600;
        margin-bottom: 20px
    }

    .sessionProfile {
        width: 100%;
        height: 72px;
        border-radius: ${SIZES.radiusx};
        background-color: ${COLORS.kwhite} !important;
        display: flex;
        align-items: center;

        .sessionData{
            .name{
                color: ${COLORS.kblackCom};
                font-size: ${SIZES.body4};
                font-weight: 500;
            }

            .location{
                display: flex;
                align-items: center;
                margin-top: -15px;
                span:nth-child(1){
                    color: ${COLORS.ksecondary};
                    font-weight: 400;
                    font-size: ${SIZES.body5};
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
            
            span{
                font-size: 12px;
                color: #B5B5BE;
                font-weight: 400;
            }

            h3{
                color: ${COLORS.kbackGray2};
                font-size: 14px;
                font-weight: 500;
            }
        }

        div:nth-child(1){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 10px 0px 0px 10px;
        }

        div:nth-child(2){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 0px 10px 10px 0px;
            border-left-color: transparent;
        }

        .doctor{
            color: ${COLORS.kblackCom};
            font-size: ${SIZES.body5};
            font-weight: 500;
        }

        /*************** Table ***************/
        
    }
`

/****** HOSPITAL PROFILE  ********/
export const DetailsWrapper = styled.div ` 
    margin: 1.5rem;
    .hospitalProfile{
        width: 100%;
        height: 72px;
        border-radius: ${SIZES.radiusx};
        background-color: ${COLORS.kwhite} !important;
        display: flex;
        align-items: center;


        .hospitalCardImage{
            width: 84px;
            height: 84px;
            border-radius: 10px;
        }

        .hospitalData{
            .name{
                color: ${COLORS.kblackCom};
                font-size: ${SIZES.body4};
                font-weight: 500;
            }

            .specialist{
                span:nth-child(1){
                    color: ${COLORS.ksecondary};
                    font-weight: 400;
                    font-size: ${SIZES.body5};
                }
                .spcialist_container{
                    margin-right: ${SIZES.base};
                    background: ${COLORS.ksmallbutton};

                    p{
                        color: ${COLORS.kblackCom};
                        font-size: 11px;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    .hosiptal_details{
        background: ${COLORS.kwhite};
        font-size: ${SIZES.body5};

        .description {
            h3{
                color: ${COLORS.kblackComx};
                font-weight: 500;
            }

            p{
                color: ${COLORS.kseconddayx};
                width: 95%;
            }
        }

        .sub-description{
            .flex{
                .icon {
                    color: ${COLORS.kprimary};

                }

                p{
                    color: ${COLORS.kseconddayx};
                }
            }
            
        }
    }

    .facilities{

        .col-span-2{
            background-color: ${COLORS.kwhite};

            h3{
                color: ${COLORS.kblackComx};
            }

            .flex{
                .facilityProfile{
                    .facilityCardImage{
                        width: 32px;
                        height: 32px;
                        background: ${COLORS.kprimary};
                        border-radius: 50%;
                        margin-right: 1rem;
                    }

                    .facilityData{
                        color: #3A3A40;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }

                .rounded-full{
                    margin-right: ${SIZES.base};
                    background: ${COLORS.ksmallbutton};

                    p{
                        color: ${COLORS.kblackCom};
                        font-size: 11px;
                        font-weight: 400;
                    }
                }
            }
        }

 
    }
`