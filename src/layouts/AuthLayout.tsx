"use client"

import Image from 'next/image';
import AuthImage from '@/assets/authImage.png';
import Logo from '@/assets/logo.png';
import {
  AuthContainer,
  CredentialBox,
  Glass,
  ImageBox,
} from '../styles/layout.style';
import {  FC, ReactNode } from 'react';
import Link from 'next/link';
import { AuthFlowLayoutContainer } from '@/styles/style-layout';


interface IAuthLayout {
  img?: any;
  title: string;
  discription: string;
  // bannerTitle: string
  children: ReactNode;
}

interface IAuthFlowLayout {
  title: string;
  desc: string;
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children, ...props }) => {
  return (
    <AuthContainer>
      <CredentialBox>
        <div className=" space-x-4 ">
          <Image
            src={Logo}
            alt=""
            height={100}
            width={100}
          />
        </div>
        <div className="credentialChildren mt-8">
          <div>
            <div
              className="credentialChildrenHeader space-y-2 mb-4"
              style={{ paddingBottom: '0.2em' }}
            >
              <h3>{props.title}</h3>
              <p>{props.discription}</p>
            </div>
            {children}
          </div>
        </div>
        
      </CredentialBox>
      <ImageBox {...props} img={props.img}>
        <Image
          src={AuthImage}
          alt="First slide"
          height="400"
          width="600"
        />

        <Glass>
          <h6 className='text-n600 text-3xl '>Streamline Your B2B Payments with Confidence and Convenience.</h6>

          {/* slider */}
          <div className='sliderContainer'>
            {/* content */}
            <div className='sliderContent'>
              {/* name */}
              <h3 className='glassName'>Opeoluwa Adeyemi</h3>
              {/* description */}
              <div>
                <p className='glassNameDescription '>Product Designer, Hourglass</p>
                <p className='glassNameDescription'>Web Design Agency</p>
              </div>
            </div>
            {/* slider panel */}
            <div className='sliderControl'>
              {/* prev */}
              <div className='prev'>

              </div >
              {/* next */}
              <div className='next'>

              </div>
            </div>
          </div>
        </Glass>
      </ImageBox>

      {/* <div className="text-n100 text-sm font-normal absolute -bottom-20 signature">© BaaS 2023</div> */}
    </AuthContainer>
  )
}

export const AuthFlowLayout: FC<IAuthFlowLayout> = ({title, desc, children}) => {
  return (
    <AuthFlowLayoutContainer>
      <div className="fixed top-3 left-10">
        <Image
          src= {Logo}
          alt="banner"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-[400px] h-[500px]  mx-auto space-y-2 ">
        <div className='w-full h-full'>
          {/* icon logo */}
          <div className='flex mx-auto mb-5 w-[81px] h-[81px] rounded-full bg-kprimary  border-[15px]   border-[rgba(33, 5, 144, 0.1)]'>

          </div>
          <div className='mb-8 space-y-2'>
            <h2 className='text-3xl text-n800 text-center font-semibold '>{title}</h2>
            <p className='text-n100 text-[16px] text-center font-normal'>{desc}</p>
          </div>
          
          {children}
          

          <div className="text-center mt-8">
            <Link href={"/"} className='text-n200 text-sm font-semibold text-center'>Back to log in</Link>
          </div>
        </div>
      </div>
      <footer className='fixed bottom-5 left-[50%] text-n100 text-sm font-normal '>© BaaS 2023</footer>
    </AuthFlowLayoutContainer>
  )
}
export default AuthLayout;
