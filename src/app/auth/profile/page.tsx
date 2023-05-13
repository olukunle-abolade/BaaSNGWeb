'use client'

import {useState} from 'react';

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

  const steps = ["Account Information", 'Personal Details', 'Complelte']

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
    <div className="md:1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5 mb-8 ">
        <Stepper 
          steps = {steps}
          currentStep = {currentStep}
        />
      </div>
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
  )
}

export default Profile