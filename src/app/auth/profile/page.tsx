'use client'

import {useState} from 'react';
import Image from 'next/image';

// ** Image
import Logo from '@/assets/logo.png';

// ** Component
import Stepper from '@/components/stepper/Stepper'
import StepperControl from '@/components/stepper/StepperControl'
import Account from '@/view/steps/account/Account'
import Details from '@/view/steps/details/Details'
import Final from '@/view/steps/final/Final'
import { StepperContext } from '@/contexts/StepperContext';

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState("")
  const [finalData, setFinalData] = useState([])

  const steps = ["Personal Information", 'Business Information', 'Financial Information', 'KYC and AML', 'Supporting Documents']

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Account />
      case 2: 
        return <Details />
      case 3:
        return <Final />
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
    <div className='w-full h-screen flex '>
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
      <div className='w-full flex-1'>
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