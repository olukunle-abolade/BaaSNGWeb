'use client'

import React, { useEffect, useState } from 'react';
// import { NavLink, useHistory } from "react-router-dom";
// import CountUp, { useCountUp } from "react-countup";
// import { Dropdown as BootDropDown } from "react-bootstrap";
// import { Divider } from '@material-ui/core';
import {
  BadgeDiv,
  Bar,
  BarContainer,
  BarStyle,
  BoardHead,
  BtnStyleTwo,
  Button,
  HandShake,
  LoaderDiv,
  ProgressBarContainer,
} from '../../styles/widget.style';
// import { AppModal } from "./Modal";
import Image from 'next/image';
import { COLORS } from '@/assets';

export const Loader = (props: any) => (
  <LoaderDiv {...props} className="spinner2">
    <div className="rect1"></div>
    <div className="rect2"></div>
    <div className="rect3"></div>
    <div className="rect4"></div>
    <div className="rect5"></div>
  </LoaderDiv>
);

export const Bars = (props: any) => (
  <BarContainer onClick={() => props.showSideBar(true)}>
    <Bar></Bar>
    <Bar></Bar>
    <Bar></Bar>
  </BarContainer>
);

interface IAppButton {
  onPress?: () => void;
  loading?: any;
  // All other props
  [x: string]: any;
}
export const AppButton: React.FC<IAppButton> = ({
  onPress,
  loading,
  ...props
}) => (
  <Button {...props} onClick={onPress} disabled={props.disabled} style={{backgroundColor: COLORS.primary}}>
    {props.icon && props.icon}
    {loading !== true ? props.name : 'loading...'}
  </Button>
);

// export const AppLink = ({ name, icon, url, ...props }: {
//   [x: string]: any,
//   name: any,
//   icon: any,
//   url: any,
// }) => (
//   <Link
//     to={url}
//     onClick={props.onPress}
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       color: props.color || '#AEAEAE',
//       fontWeight: 'normal',
//     }}
//     exact={props.exact}
//     activeClassName={props.activeClassName}
//   >
//     {icon && icon}
//     <span>{name}</span>
//   </Link>
// );

export const BoardHeader = (props: any) => (
  <BoardHead {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {props.img && (
        <HandShake alt="img" src={props.img} className="handshake" />
      )}
      <div style={{ padding: '0 1em' }}>
        <h2 style={{ color: '#282F65' }}>{props.title}</h2>
        <span>
          <small style={{ color: '#84929E', fontWeight: '500' }}>
            {props.subtitle}
          </small>
        </span>
      </div>
    </div>

    {props.leftItem && props.leftItem}
  </BoardHead>
);

// export const Table = props => {
//   const key = props.tableData && Object.keys(props.tableData[0]);
//   console.log(key)
//   console.log();
//   return (
//     <TableContainer {...props}>
//       <TableStyle {...props}>
//         <tr>
//           {props.isCheck && (
//             <th style={{ width: "5px" }}>
//               <Checkbox />
//             </th>
//           )}
//           {props.tableData &&
//             Object.keys(props.tableData[0]).map(content => (
//               <th>
//                 <span>{content != "id" && content}</span>
//               </th>
//             ))}
//           <th>
//             <span>Action</span>
//           </th>
//         </tr>
//         {props.tableData &&
//           props.tableData.map((content, index) => (
//             <tr>
//               {key.map(dt => (
//                 <td>
//                   <span>{dt != "id" && content[dt]}</span>
//                 </td>
//               ))}
//               <td>
//                 <span>
//                   <Ellipse index={index} {...props} />
//                 </span>
//               </td>
//             </tr>
//           ))}
//       </TableStyle>
//     </TableContainer>
//   );
// };

export const Ellipse = (props: any) => {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    window.onclick = () => {
      if (show == true) {
        setShow(false);
      }
    };
  }, [show]);

  const handler = () => {
    // setNum(prevState => (prevState.num = props.index));

    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <small
        style={{
          cursor: 'pointer',
          fontSize: '28px',
          color: '#B9B9B9',
          fontWeight: 'bold',
        }}
        onClick={handler}
      >
        ...
      </small>
      {/* <Dropbox show={show} menu {...props} /> */}
    </div>
  );
};

// export const TopEllipse = props => {
//   const [show, setShow] = useState(false);
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     window.onclick = () => {
//       setShow(false);
//     };
//   }, [show]);

//   return (
//     <>
//       <BootDropDown>
//         <BootDropDown.Toggle
//           style={props.fontSize}
//           variant=""
//           id="dropdown-basic-type2"
//         >
//           {props.type}
//         </BootDropDown.Toggle>
//         <Dropbox {...props} />
//       </BootDropDown>
//     </>
//   );
// };

// export const Dropbox = props => {
//   const [show, setShow] = useState(false);
//   const history = useHistory();

//   const showConfirmModal = e => {
//     e.preventDefault();

//     setShow(true);
//   };

//   const closeModal = () => {
//     setShow(false);
//   };

//   const handleProfile = e => {
//     e.preventDefault();
//     history.push("/profile");
//   };

//   return (
//     <>
//       <Dropdown {...props} className="dropdown-content">
//         {props.menu ? (
//           <>
//             <AppLink icon={<IoEyeOutline />} name="View" url={props.url} />
//             <AppLink
//               icon={<IoPencilOutline />}
//               name="Edit"
//               url="#"
//               onPress={e => {
//                 e.preventDefault();
//                 props.edit(props.id);
//               }}
//             />
//             <AppLink
//               icon={<IoTrashOutline />}
//               name="Delete"
//               url="#"
//               onPress={showConfirmModal}
//             />
//             {props.isList == true && (
//               <AppLink
//                 icon={<IoChatbubbleEllipsesOutline />}
//                 name="Chat"
//                 onPress={props.showChater}
//               />
//             )}
//           </>
//         ) : (
//           // <>
//           //   <AppLink name="Logout" onPress={props.logout} />
//           //   <AppLink name="Profile" url="/profile" />
//           // </>
//           <>
//             <BootDropDown.Item href="#" onClick={props.logout}>
//               Logout
//             </BootDropDown.Item>
//             <BootDropDown.Item href="#" onClick={handleProfile}>
//               Profile
//             </BootDropDown.Item>
//           </>
//         )}
//       </Dropdown>
//       <ConfirmationModal display={show} close={closeModal} {...props} />
//     </>
//   );
// };

export const ButtonTypeTwo = (props: any) => (
  <BtnStyleTwo
    style={{ borderRadius: '5px', padding: '1em', margin: 'auto' }}
    onClick={props.onPress}
  >
    {props.title}
  </BtnStyleTwo>
);

// export const Counter = props => {
//   const countUpRef = useRef(null);
//   const { start } = useCountUp({
//     ref: countUpRef,
//     start: 0,
//     end: props.num,
//     duration: 2,
//     separator: ",",
//   });

//   useEffect(() => {
//     start();
//   }, []);

//   return (
//     <div>
//       <span ref={countUpRef} />
//     </div>
//   );
// };

// export const RegisterTop = (props: any) => (
//   <div className="" style={{ paddingBottom: '0.2em' }}>
//     <h3>Sign up</h3>
//     <div style={{ padding: '1em 0' }}>
//       <AppButton
//         icon={<FcGoogle size="25px" style={{ paddingInline: '2em' }} />}
//         name="Sign up with Google"
//         bg="#fff"
//         color="#3546cb"
//         onPress={(e) => {
//           e.preventDefault();
//           toast.error('This feature is not available at the moment');
//         }}
//       />
//     </div>
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: '1em',
//       }}
//     >
//       <Divider style={{ width: '41%' }} />{' '}
//       <span style={{ padding: '0 40px' }}>or</span>
//       <Divider style={{ width: '41%' }} />
//     </div>
//   </div>
// );

export const CheckboxDiv = (props: any) => (
  <div>
    <label>
      <input type="checkbox" />
      <small style={{ padding: '0 1em' }}>{props.name}</small>
    </label>
  </div>
);

export const ProgressBar = (props: any) => {
  return (
    <ProgressBarContainer>
      <small className="percent">{props.percent}</small>
      <BarStyle className="meter" {...props}>
        <span></span>
      </BarStyle>
    </ProgressBarContainer>
  );
};

export const Badge = ({ text }: { text: string }) => (
  <BadgeDiv>
    <small>{text}</small>
  </BadgeDiv>
);

const DeleteContent = (props: any) => (
  <div>
    <div style={{ padding: '1em 0 3em' }}>
      <span>Are you sure you want to Delete this ?</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <AppButton
        name="Cancel"
        bg="#fff"
        color="#3546cb"
        onPress={props.close}
      />
      <AppButton name="Delete" onPress={props.delete} />
    </div>
  </div>
);

export const PropertyImage = (props: any) => (
  <div>
    <Image src={props.img} width={30} height={30} alt="img" />
  </div>
);

// export const ConfirmationModal = props => (
//   <AppModal
//     padding=".5em 1.5em"
//     width="25%"
//     modalTitle="Delete"
//     display={props.display}
//     closeModal={props.close}
//     content={<DeleteContent close={props.close} {...props} />}
//   />
// );
