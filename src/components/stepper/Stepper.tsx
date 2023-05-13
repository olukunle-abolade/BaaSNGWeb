'use client'

import { FC, useEffect, useState, useRef, SetStateAction } from "react";

interface IStepper {
  steps: any[];
  currentStep: any;
}


const Stepper: FC<IStepper> = ({steps, currentStep}) => {
 const [newStep, setNewStep] = useState([])
 const stepRef = useRef<{}>();

 const updateStep = (stepNumber: number, steps: any) => {
  const newSteps = [...steps]
  let count = 0;

  while (count < newSteps.length){
    //current step
    if(count === stepNumber){
      newSteps[count] = {
        ...newSteps[count],
        highlighted: true,
        selected: true,
        completed: true 
      };
      count++;
    }
    // set completed
    else if(count < stepNumber){
      newSteps[count] = {
        ...newSteps[count],
        highlighted: false,
        selected: true,
        completed: true 
      };
      count++;
    }
    // step pending
    else {
      newSteps[count] = {
        ...newSteps[count],
        highlighted: false,
        selected: false,
        completed: false 
      };
      count++;
    }
  }
  return newSteps;
 }

  useEffect(() => {
    //create object
    const stepsState = steps.map(
      (step: any, index: any) => 
      Object.assign({}, {
        description: step,
        completed: false,
        highlighted: index === 0 ? true : false,
        selected: index === 0  ? true : false
      })
    )

    stepRef.current = stepsState
    const current: SetStateAction<never[]> | any = updateStep( currentStep - 1, stepRef.current)
    setNewStep(current)

  }, [steps, currentStep]);
  

  const displaySteps = newStep.map((step: any, index: number) => {
    return (
      <div key={index} className={ index !== newStep.length - 1 ? "w-full flex items-center" : 'flex items-center'}>
        <div className="relative flex flex-col items-center text-teal-600 ">
          <div className={`w-12 h-12 flex items-center justify-center py-3 rounded-full transition duration-500 ease-in-out border-2 border-gray-300 ${step.selected ? "bg-green-600 text-white font-bold border border-green-600": ""}`}>
            {/* Display Numbers */} 
            {step.completed ? 
              <span className="text-white font-bold text-xl">
                &#10003;
              </span> : (index + 1)
            }
          </div>
          <div className={`absolute top-0 text-center mt-16 w-32 font-medium uppercase ${step.highlighted ? "text-gray-900": "text-gray-400"}` }>
            {/* Display Description */}
            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2 transition duration-500 border-2 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"} `}>
          {/* Desplay lines */}
        </div>
      </div>
    )
  })



  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  )
}

export default Stepper