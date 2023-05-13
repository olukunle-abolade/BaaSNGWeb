import { FC } from "react";

interface IStepperControl {
  handleClick: any;
  currentStep: unknown;
  steps: string[];
}

const StepperControl: FC<IStepperControl> = ({handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-4'>
      {/* Back Button */}
      <button onClick={() => handleClick()} className={ `bg-white text-slate-400 uppoercase py-2 px-4 rounded-xl font-semibold cursor-point border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
        Back
      </button>
      {/* Next Button */}
      <button onClick = {() => handleClick("next")} className='bg-green-500 text-white uppoercase py-2 px-4 rounded-xl font-semibold cursor-point hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
        {currentStep === steps.length - 1 ? "Confirm:" : "Next"} 
      </button>
    </div>
  )
}

export default StepperControl