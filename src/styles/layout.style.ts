"use client"

import styled, { keyframes } from 'styled-components';
import { COLORS, SIZES } from '@/assets/theme/theme';

export const LayoutBox = styled.div`
  /** style layout here*/
  background-color: #ffffff;
  min-height: 100vh;
  padding: 0;
  height: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  textarea {
    resize: none;
    min-height: 100%;
    padding: 1em;
  }
  select {
    outline: none;
  }
`;

export const AuthNote = styled.div`
  width: 100%;
  padding: 0.8rem 0rem;
  border-radius: 4px;
  margin-top: 1rem;

  p {
    font-size: 13px;
    // color: ${COLORS.kblackCom};
    text-align: center;
  }
`;

export const AuthError = styled.div`
  width: 100%;
  padding: 0.8rem 0rem;
  background: #f46a6a;
  border: 1px solid #f46a6a;
  border-radius: 4px;
  margin-top: 1rem;

  p {
    font-size: 13px;
    color: ${COLORS.kblackCom};
    text-align: center;
  }

  .signature {
    display: none;
    position: absolute;
    bottom: 30
  }
`;

export const AuthContainer = styled.div`
  /** style auth layout here */
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  background: ${COLORS.white};
`;

const slideUp = keyframes`
0%{
  opacity: 0;
  transform: translate(0px, 40px);
}
100%{
  opacity: 1;
  transform: translate(0px, 0px);
}
`;

export const CredentialBox = styled.div`
  /** style credential container here */
  display: flex;
 
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
  margin auto auto;
  width: 80%;

  .credentialWrapper {
    width: 450px;
    height: 332px;
    padding: 2em;
    background: #ffffff;
    margin-top: 6rem;
    margin
  }
  .credentialHeader {
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    .credentialIcon {
      // color: ${COLORS.kblackCom};
      // font-size:
    }

    h2 {
      font-size: ${SIZES.h2};
      font-weight: 500;
      color: ${COLORS.black};
    }

    .credentialIcon {
      color: ${COLORS.kblackCom};
      font-size: 24px;
      margin-right: ${SIZES.base};
    }
  }

  .credentialChildren {
    flex: 1;
    display: flex !important;
    justify-content: center !important;
    flex-direction: column;
    // background: green;

    .credentialChildrenHeader {
      h3 {
        color: #111111;
        font-weight: 600;
        font-size: 30px;
        line-height: 48px;
      }

      p {
        color: #757575;
        font-size: ${SIZES.body3};
        font-weight: 400;
        line-height: 28px;
        width: 90%;
      }
    }
  }

  .credentialConfirmation {
    flex: 1;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    flex-direction: column;

    h3 {
      text-align: center;
      font-weight: 500;
      size: ${SIZES.h3};
      color: ${COLORS.kblackCom};
    }

    .credentialConfirmationDescription {
      text-align: center;
      font-size: ${SIZES.body4};
      color: ${COLORS.kblackCom};
      margin-top: 1rem;
    }

    //note
    p {
      color: ${COLORS.secondary};
      font-size: ${SIZES.body5};
    }

    .credentialConfirmationCircle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eff2f7;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-bottom: 1.5rem;

      .credentialConfirmationCircleIcon {
        font-size: 26px;
        color: ${COLORS.primary};
      }
    }
  }

  .credentialFooter {
    h3 {
      color: ${COLORS.kblackCom};
      font-size: ${SIZES.body4};
      font-weight: 400;
      text-align: center;
    }
  }
  .form_container {
    width: 100%;
    animation: ${slideUp} ease 1s;
    display: flex;
    // justify-content: center;
    form {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 1.5em;
    .form_container {
      width: 100%;
    }
  }
`;

export const ImageBox = styled.div<{ img: any }>`
  /** style side image container for login */
  background-image: url(${(props) => props.img});
  display: flex;
  position: relative;
  align-items: right;
  justify-content: right;
  position: relative;
  height: 100vh;


  @media (max-width: 768px) {
    display: none;
  }

  .glass {
    
    
  }
`;

export const Glass = styled.div`
  position: absolute;
  // width: fit-content;
  height: 335px;
  width: 450px;
  padding: 45px 33px;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(111.26deg, rgba(255, 255, 255, 0.6) 11.75%, rgba(255, 255, 255, 0.18) 88.07%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7.5px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6{
    font-size: 26px;
  }

  .sliderContainer{
   
    .sliderContent{
      .glassName {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #2E2E2E;
        margin-bottom: 10px;
      }

      .glassNameDescription{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #2E2E2E;
      }
    }
  }

`

export const AuthLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  max-width: 500px;
  width: 500px;

  // margin: 80px auto;
  height: auto;
  // padding: 35px;
  // padding-top: 70px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
  border-radius: ${SIZES.base};
  background: ${COLORS.kwhite};

  .cardBody {
    height: 100%;
    padding: 40px 20px;
  }
`;

export const CardHeader = styled.div`
  // height: 200px;
  padding: 45px 0px 0 20px;
  height: 140px;
  background: ${COLORS.blue};
  width: 100%;
  border-radius: ${SIZES.base} ${SIZES.base} 0px 0px;
  position: relative;
  h3,
  p {
    color: ${COLORS.kwhite};
  }

  h3 {
    margin-top: -15px;
    font-weight: 500;
    font-size: ${SIZES.h3};
  }

  .headerCircle {
    position: absolute;
    bottom: -25%;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${COLORS.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;

    .headerCircleIcon {
      color: ${COLORS.kblackCom};
      font-size: 36px;
    }
  }
`;
