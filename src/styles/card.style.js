import styled from "styled-components"
import { COLORS, SIZES } from "../assets/theme/theme"

export const HospitalCardWrapper = styled.div `
    background-image : url(${(props) => props.image.src});
    background-repeat: no-repeat;
    width: 370px;
    height: 230px;
    border-radius: ${SIZES.base};

    .si{
        color: ${COLORS.kwhite};
        font-weight: 600;
        font-size: ${SIZES.h3};
    }

    .en{
        color: ${COLORS.kwhite};
        font-weight: 400;
        font-size: ${SIZES.body5}
    }

    .do{
        color : #0E0E13;
        font-weight: 500;
        font-size: 14px;
        margin-top: -10px;
    }
`