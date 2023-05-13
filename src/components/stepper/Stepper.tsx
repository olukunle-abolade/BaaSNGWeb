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
      <div key={index} className={ index !== newStep.length - 1 ? "w-full h-[70vh] flex flex-col items-center" : 'flex flex-col items-center'}>
        <div className="relative flex  items-center text-n60 text-xs">
          <div className={`w-[22px] h-[22px] flex items-center justify-center  rounded-full transition duration-500 ease-in-out border-2 border-gray-300 ${step.selected ? "bg-kprimary text-white font-semibold border border-kprimary": ""}`}>
            {/* Display Numbers */} 
            {step.completed ? 
              <span className="text-white font-bold text-[10px]">
                &#10003;
              </span> : (index + 1)
            }
          </div>
          <div className={`absolute top-0 text-center mt-16 w-32 font-medium uppercase ${step.highlighted ? "text-gray-900": "text-gray-400"}` }>
            {/* Display Description */}
            {step.description}
          </div>
        </div>
        <div className={`flex flex-col flex-auto border-t-2 transition duration-500 border-[1.3px] ease-in-out ${step.completed ? "border-kprimary" : "border-gray-300"}`}>
          {/* Desplay lines */}
        </div>
      </div>
    )
  })



  return (
    <div className="mx-4 p-4 h-[70vh] flex flex-col justify-between items-center">
      {displaySteps}
    </div>
  )
}

export default Stepper