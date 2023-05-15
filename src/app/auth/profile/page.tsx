'use client'

import {useState} from 'react';
import Image from 'next/image';

// ** Image
import Logo from '@/assets/logo.png';

// ** Component
import Stepper from '@/components/stepper/Stepper'
import StepperControl from '@/components/stepper/StepperControl'
import { StepperContext } from '@/contexts/StepperContext';
import Personal from '@/view/steps/personal/Personal';
import Bussiness from '@/view/steps/business/Business';
import Financial from '@/view/steps/financial/Financial';
import Kyc from '@/view/steps/kyc/Kyc';
import Document from '@/view/steps/document/Document';

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState("")
  const [finalData, setFinalData] = useState([])

  const steps = ["Personal Information", 'Business Information', 'Financial Information', 'KYC and AML', 'Supporting Documents']

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Personal />
      case 2: 
        return <Bussiness />
      case 3:
        return <Financial />
      case 4:
        return <Kyc />
      case 5:
        return <Document />
      default:
    }
  }

  const handleClick = (direction: any) => {
    let newStep = currentStep
    direction === "next" ? newStep++ : newStep--;
    // checks if some steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (
    <div className='w-full h-full flex '>
      {/* sidbar */}
      <div className='w-[17.563rem] h-screen bg-p50'>
        <div className="flex items-center justify-center pt-10">
          <Image
            src= {Logo}
            alt="banner"
            height={100}
            width={100}
          />
        </div>

        {/* Stepper */}
        <div className=" horizontal mt-5 mb-8 ">
          <Stepper 
            steps = {steps}
            currentStep = {currentStep}
          />
        </div>
      </div>
      <div className='w-full flex-1 bg-white'>
        {/* Display Components */}
        <div className='my-10 p-10 '>
          <StepperContext.Provider value={{
            userData ,
            setUserData,
            finalData,
            setFinalData
          }} >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

        {/* Navigation control */}
        <StepperControl 
          handleClick = {handleClick}
          currentStep = {currentStep}
          steps = {steps}
        />
      </div>
    </div>
  )
}

export default Profile