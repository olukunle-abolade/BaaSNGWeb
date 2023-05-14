import { FC } from "react";
import CustomButton from "../CustomButton";
import { HiArrowCircleLeft } from "react-icons/hi";

interface IStepperControl {
  handleClick: any;
  currentStep: unknown;
  steps: string[];
}

const StepperControl: FC<IStepperControl> = ({handleClick, currentStep, steps }) => {
  return (
    <div className=' flex w-full  justify-around mt-4'>
      {/* Back Button */}
      <button onClick={() => handleClick()} className={ `flex items-center text-[#828282] uppoercase py-2 px-4 font-normal cursor-point  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
        <HiArrowCircleLeft className="mr-2"/> Back
      </button>
      {/* Next Button */}
      <CustomButton onClick = {() => handleClick("next")} title= {currentStep === steps.length - 1 ? "Confirm" : "Next"}  buttonStyle={{width: 320}}  />
    </div>
  )
}

export default StepperControl