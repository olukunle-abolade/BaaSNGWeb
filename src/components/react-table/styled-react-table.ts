'use client'

import { COLORS, SIZES } from "@/assets"
import styled from "styled-components"

export const TableWrapper = styled.div`
    // overflow-y: auto;
    background: ${COLORS.kwhite};

    .table-spacing {
        overflow-y: auto;
        width: 100%;
        min-width: 400px;
        border-collapse: separate;
        border-spacing:0 0px !important;
        box-shadow: #F8F9FA;

        thead {
            background: #F4F4F4;
            tr{
                padding: 0 3rem;
                text-align: left;
                    th, td {
                        text-transform: capitalize;
                        padding: 15px 10px;
                        color:  ${COLORS.black};
                        font-size: ${SIZES.body5};
                        font-weight : 600;
                    }
            }
        }

        

        tbody tr{
            background: ${COLORS.kwhite};
            th,  td {
                text-transform: capitalize;
                padding: 15px 10px;
                color:  #4A4A4A;
                font-size: ${SIZES.h4};
                margin-top: 5rem;
                font-weight: 400;
            }

            &:hover{
                background: ${COLORS.lightGray};
            }
        }

        tbody > tr:hover{
        }
    }

    .table__pagination {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;

        .table__pagination-item{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: ${COLORS.kblackCom};
        }

        .table__pagination-item.active, 
            .table__pagination-item.active:hover{
                background-color: ${COLORS.primary};
                color: white;
                font-weight: 600;
            }

            .table__pagination-item:hover {
                color: white;
                background-color: ${COLORS.primary};
                opacity: .3
            }
        .table_pagination ~ .table_pagination-item {
            margin-left: 10px;
        }
    }

    button {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
    }
      
    button:hover {
        background-color: #ddd;
        color: black;
    }
      
    .previous {
        background-color: #f1f1f1;
        color: black;
    }
      
    .next {
        background-color: ${COLORS.primary};
        color: white;
    }
`

export const TableCard = styled.div `
    // padding : 10px 28px 10px 20px;
    border-radius: 4;
`