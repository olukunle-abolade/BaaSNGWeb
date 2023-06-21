'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation'
import Image from 'next/image';

// ** Image
import Logo from '@/assets/logo.png';

// ** Context
import { StepperContext } from '@/contexts/StepperContext';

//RTQ
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';

// ** Third Party
import { toast } from 'react-hot-toast';

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

// ** Slice
import { postAsyncProfile } from '@/store/app/profile';

// ** Component
import Stepper from '@/components/stepper/Stepper'
import StepperControl from '@/components/stepper/StepperControl'
import Personal from '@/view/steps/personal/Personal';
import Bussiness from '@/view/steps/business/Business';
import Financial from '@/view/steps/financial/Financial';
import Kyc from '@/view/steps/kyc/Kyc';
import Document from '@/view/steps/document/Document';
import { AuthValuesType, ProfileDataType, StepperValuesType } from '@/contexts/types';

export  interface IUserData {
  fullName: string;
  gender: string;
  dob: string;
  nationality: string;
  phone: string;
  address: string;
  idtype: string;
  idno: string;
  occupation: string;
  sounces: string;
  business_name: string;
  reg_number: string;
  business_number: string;
  business_email: string;
  business_website: string;
  business_address: string;
  business_type: string;
  business_industry: string;
  purpose_of_account: string;
}

// ** Defaults
// const defaultProvider: AuthValuesType = {
//   user: null,
//   loading: false,
//   token: '',
//   setUser: () => null,
//   setLoading: () => Boolean,
//   login: () => Promise.resolve(),
//   signup: () => Promise.resolve(),
//   pass: () => Promise.resolve(),
//   otp: () => Promise.resolve(),
//   logout: () => Promise.resolve()
// }

const StepperProvider: StepperValuesType = {
  userData: null,
  setUserData: () => null,
}

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState<ProfileDataType | null>(StepperProvider.userData)
  // const [finalData, setFinalData] = useState([])

  
  const updateFormData = (newData: any) => {
    setUserData({ ...userData, ...newData });
  };

  // ** Context
  const auth = useAuth()

  // Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router  = useRouter();
  const userId = auth.user?.id


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

  function checkIfNumber(response: any): boolean {
    return typeof response === "number";
  }

  const handleClick = (direction: any) => {
    let newStep = currentStep
    direction === "next" ? newStep++ : newStep--;
    // checks if some steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    if(newStep === 6){
      const formData = {
        url: "/records/profile",
        userid: userId,
        firstname: userData?.fullName,
        middlename: userData?.fullName,
        lastname: userData?.fullName,
        dateofbirth: userData?.dob,
        email: userData?.business_email,
        phonenumber: userData?.phone,
        address: userData?.address,
        stateofresidence: "Lagos",
        stateoforigin: "Ogun",
        country: userData?.nationality,
        profile_image: null,
        idtype: userData?.idtype,
        idcard: null,
        issuedate: "",
        expirydate: "",
        kyclevel: 1,
        occupation: userData?.occupation,
        businessname: userData?.business_name,
        businessregnumber: userData?.reg_number,
        businessphonenumber: userData?.business_number,
        businessemail: userData?.business_email,
        website: userData?.business_website,
        businessaddress: userData?.business_address,
        businesstype: userData?.business_type,
        businessindustry: userData?.business_industry,
        income: null,
        networth: null,
        sourceoffund: userData?.sounces,
        purposeofaccount: userData?.purpose_of_account,
        consenttoverifyinfo: null,
        consentshareinfowithreg: null,
        iddocument: null,
        businessregdoc: null,
        financialstatement: null,
        proofofaddress: null     
      }



      dispatch(postAsyncProfile(formData))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult)
        checkIfNumber(originalPromiseResult) && router.push("/dashboard")
        toast.success(originalPromiseResult.message)
      })
      .catch(rejectedValueorSerializedError => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
    }
  }

  console.log(userData)
  return (
    <div className='w-full h-full flex '>
      {/* sidbar */}
      <div className='w-[17.563rem] h-screen fixed bg-p50'>
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
      <div className='w-full flex-1 bg-white ml-[17.563rem] pb-20'>
        {/* Display Components */}
        <div className='my-10 p-10 '>
          <StepperContext.Provider value={{
            userData ,
            setUserData,
            // updateFormData,
            // finalData,
            // setFinalData
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