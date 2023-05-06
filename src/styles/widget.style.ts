"use client"

import { COLORS, SIZES } from '@/assets';
import styled, { keyframes } from 'styled-components';

export const Button = styled.button<{[x:string]: any}>`
  /** style button for the app here */
  cursor: pointer;
  background-color: ${(props) => props.bg || COLORS.primary};
  height: 50px;
  width: ${(props) => props.width || '100%'};
  border: ${(props) => props.border || `1px solid ${COLORS.primary}`};
  color: ${(props) => props.color || '#fff'};
  padding: 0.8em 1em;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin};
  justify-content: center;
  font-weight: 400;
  font-size: ${(props) => props.size || SIZES.font};
`;

export const AppGrid = styled.div<{[x:string]: any}>`
  /** style grid here */
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid || '12'}, 1fr);
  grid-auto-rows: minmax(100px auto);
  grid-gap: ${(props) => props.gap || '1.5em 2em'};
  background-color: transparent;
  padding: ${(props) => props.pad || '1em'};
  @media (max-width: 768px) {
    grid-gap: 1em 0;
    grid-template-columns: 1fr;
  }
`;

export const BoardHead = styled.div<{[x:string]: any}>`
  padding: ${(props) => props.pad || '1.5em 1em 0'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Title = styled.div`
  grid-column: 1/13;
  grid-row: 1/2;
  align-self: center;
`;

export const TableContainer = styled.div<{[x:string]: any}>`
  grid-column: 1/13;
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : '')};
  margin-top: ${(props) => `${props.mt}em` || 0};
`;

export const TableStyle = styled.table<{[x:string]: any}>`
  width: ${(props) => (props.full ? '100%' : '97%')};
  border-collapse: collapse;
  text-align: left;
  tr {
    border-bottom: 0.2px solid #eff0f6;
  }
  & th {
    background-color: #eff0f6;
    padding: 0.8em;
    color: #767676;
  }
  & td {
    padding: 1em;
    background-color: #fff;
    color: #767676;
  }
  th input,
  td input {
    cursor: pointer;
    outline: none;
  }
`;

export const Dropdown = styled.div<{[x:string]: any}>`
  display: ${(props) => (props.show === true ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0;
  z-index: 1;
  margin: ${(props) => props.mt || 0} -5em;
  a {
    text-decoration: none;
    padding: 10px 20px;
    border-bottom: 1px solid #eff0f6;
    display: flex;
    align-items: center;
    span {
      padding: 0 1em;
      color: #000;
      font-weight: 500;
    }
  }
  a:nth-child(1) {
    background-color: #f2f6ff;
  }
`;
export const BtnStyleTwo = styled.button`
  width: 10%;
  padding: 0.7em 1em;
  background-color: transparent;
  border: 1px solid #3546cb;
  border-radius: 2em;
  color: #3546cb;
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const stretchdelay = keyframes`
0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
`;

export const HandShake = styled.img`
  /* design wave icon here */
  animation: ${shake} 1s;
  animation-iteration-count: initial;
`;

export const ModalContainer = styled.div<{[x:string]: any}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  z-index: 1000;
  .modal-content {
    background-color: #fefefe;
    border: none;
    width: ${(props) => props.width || '40%'};
    border-radius: 5px;
    margin: 5em 3em;
    @media (max-width: 768px) {
      width: 80% !important;
      margin: auto 0;
    }
  }
  .container_header {
    background-color: #eee;
    padding: 1em;
    color: #3546cb;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  .close {
    cursor: pointer;
  }
  .container_body {
    padding: ${(props) => props.padding || '1em 4em'};
  }
`;

export const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  .icon {
    cursor: pointer;
    margin-left: 2px;
  }
`;

export const BadgeDiv = styled.div`
  background-color: #3546cb;
  margin-inline: 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const BarStyle = styled.div<{[x:string]: any}>`
  flex: 2;
  background-color: #e9ecef;
  height: 2px;
  position: relative;
  border-radius: 20px;
  & span {
    display: block;
    width: ${(props) => (props.roval ? '100%' : '50%')};
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${(props) => (props.approval ? '#98EC2D' : 'red')};
    position: relative;
    overflow: hidden;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  .percent {
    flex: 1;
  }
`;

export const LoaderDiv = styled.div`
  width: 50px;
  height: 21px;
  text-align: center;
  font-size: 10px;
  margin: 10em 50em;
  div {
    margin: auto 1px;
    background-color: #3546cb;
    height: 100%;
    width: 2px;
    border-radius: 2px;
    display: inline-block;
    -webkit-animation: ${stretchdelay} 1.2s infinite ease-in-out;
    animation: ${stretchdelay} 1.2s infinite ease-in-out;
  }
  .spinner2 .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .spinner2 .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

export const BarContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

// ProgressBar Style
export const ProgressBar = styled.div` 
  background-color: #E8E8E8;
  border-radius: 5.5px;
  position: relative;
  margin: 15px 0;
  height: 7px;
  width: 100%;

  .progress-done {
    background: linear-gradient(119.79deg, #210590 20.8%, #5428FF 88.13%);
    border-radius: 5.5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0.4;
    transition: 1s ease 0.3s;
  }
`