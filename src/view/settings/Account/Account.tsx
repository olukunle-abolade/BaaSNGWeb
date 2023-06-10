import { FC, useEffect, useState } from 'react';
import Image from 'next/image'

// ** Images
import ProfileImage from '@/assets/logo.png'

// ** Components
import CustomButton from '@/components/user/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'
import { ProgressBar } from '@/styles/widget.style';

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

// ** Third Party
import { AiOutlineFile } from 'react-icons/ai'
import { UserData } from '../profile/Profile';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'

//** RTQ
import { useAppSelector } from '@/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { fetchAsyncBusinessIndustry,fetchAsyncSourceOfFund,  fetchAsyncBusinessType, fetchAsyncPurposeOfAccout,  getMiscellaneousBusinessType, getMiscellaneousIndustry } from '@/store/app/miscellaneous'
import { MyData, fetchAsyncProfile, postAsyncProfile, updateAsyncProfile } from '@/store/app/profile'


interface IProgress {
  done: string;
  days: string;
}

const Progress: FC<IProgress> = ({ done, days }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <div className='flex items-center space-x-2'>
      
      <ProgressBar>
        <div className="progress-done" style={style}>
          {/* {done}% */}
        </div>
      </ProgressBar>
      {/* days */}
      <h4 className='text-n100 text-sm font-medium'>{days}%</h4>
    </div>
  );
};

const Document = (  ) => {
  return (
    <div className="space-y-2">
      {/* title */}
      <h3 className='text-sm text-n800 font-medium'>ID documents <span className='text-xs text-n100 font-normal'>(e.g. passport, ID card)</span></h3>
      <div className="flex flex-col justify-center w-[342px] h-[126px] rounded-xl border border-p200 ">
        <div className="px-4">
          {/* upper part */}
          <div className="flex justify-between ">
            <div className='flex items-center space-x-2'>
              <div className="flex items-center justify-center w-[38.29px] h-[38.29px] rounded-full border-4 border-p50 bg-[#F5F5F5]">
                <AiOutlineFile  color = "#7E6EBF" />
              </div>

              <div className="">
                {/* file name  */}
                <h3 className='text-p200 text-sm font-medium'>Tech design requirements.pdf</h3>
                {/* file size */}
                <p className='text-n100 text-xm font-normal'>200 KB</p>
              </div>
            </div>
            <input id="default-checkbox" type="checkbox" defaultChecked={true} value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          </div>
          {/* progressive part */}
          <Progress done='100' days='100' />
        </div>
      </div>
    </div>
  )
}

const defaultValues: UserData = {
  businessname: '',
  businessregnumber: '',
  businessphonenumber: '',
  businessemail: '',
  website: '',
  businessaddress: '',
  businesstype: '',
  businessindustry: '',
  sourceoffund: '',
  purposeofaccount: ""
}

const Account = () => {
  const [data, setData] = useState<UserData[]>([])
  const [source, setSource] = useState<any[]>([])
  const [purpose, setPurpose] = useState<any[]>([])

  const { control, setValue, reset, handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange'
  })

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id
  const url2 = `/records/profile/${data[0]?.id}`

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const idType = useAppSelector(getMiscellaneousBusinessType)
  const bussinessIndustry = useAppSelector(getMiscellaneousIndustry)

  const url = `/records/profile/${data[0]?.id}`

  const onSubmit = (data: UserData) => {
    const formData = {
      url: url2,
      businessname: data.businessname,
      businessregnumber: data.businessregnumber,
      businessphonenumber: data.businessphonenumber,
      businessemail: data.businessemail,
      website: data.website,
      businessaddress: data.businessaddress,
      businesstype: data.businesstype,
      businessindustry: data.businessindustry,
      sourceoffund: data.sourceoffund,
      purposeofaccount: data.purposeofaccount,
    }

    console.log(formData)
    dispatch(updateAsyncProfile(formData))
      .unwrap()
      .then((originalPromiseResult: MyData) => {
        // originalPromiseResult.code === 1012 || 1021 ?
        //   toast.error(originalPromiseResult.message)
        // :
        toast.success("Profile Update Successful")
      }) 
      .catch(rejectedValueorSerializedError => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
  }


  // Get sourceoffund
  useEffect(() => {
  // url
  const url = '/records/sourceoffund';
  dispatch(fetchAsyncSourceOfFund({url}))
    .unwrap()
      .then((originalPromiseResult) => {
        // work need to be done here conditon
        setSource(originalPromiseResult.records)
      })
      .catch((rejectedValueorSerializedError) => {
        {
          rejectedValueorSerializedError &&
            toast.error(rejectedValueorSerializedError.message)
        }
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Get Purpose of Account
  useEffect(() => {
    // url
    const url = '/records/purposeofaccount';
    dispatch(fetchAsyncPurposeOfAccout({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          // work need to be done here conditon
          setPurpose(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // Get Business Type
  useEffect(() => {
    // url
    const url = '/records/businesstype';
    dispatch(fetchAsyncBusinessType({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Business Industry
  useEffect(() => {
    // url
    const url = '/records/businessindustry';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const profileInfo = {
        url: `/records/profile/?filter=userid,eq,${userId}`,
      }
      dispatch(fetchAsyncProfile(profileInfo))
        .unwrap()
        .then(originalPromiseResult => {
          // console.log(originalPromiseResult.status)
          // originalPromiseResult.status === 200 &&
  
          setData(originalPromiseResult.records)
        })
        .catch(rejectedValueorSerializedError => {
          console.log(rejectedValueorSerializedError.message)
          {
            rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
          }
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  useEffect(() => {
    setValue('businessname', data[0]?.businessname )
    setValue('businessregnumber', data[0]?.businessregnumber)
    setValue('businessphonenumber', data[0]?.businessphonenumber)
    setValue('businessemail', data[0]?.businessemail)
    setValue('website', data[0]?.website)
    setValue('businessaddress', data[0]?.businessaddress)
    setValue('businesstype', data[0]?.businesstype)
    setValue('businessindustry', data[0]?.businessindustry)
    setValue('sourceoffund', data[0]?.sourceoffund)
    setValue('purposeofaccount', data[0]?.purposeofaccount)
  }, [data, setValue])

  return (
    <div className='h-full'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>Account Settings</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Update your Business details here.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
          </div>
        </div>

        {/* profie picture */}
        {/* <div className='flex items-center space-x-4 mt-5'>
          <div className="flex items-center justify-center w-[111.11px] h-[111.11px] rounded-full bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.1)]">
            <Image
              src = {ProfileImage}
              alt = ""
              width = {100}
              height = {100}
              className = "rounded-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Change Image' textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' buttonStyle={{width: 130}} />
            <CustomButton title='Delete' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
          </div>
      </div> */}

        {/* Form Field */}
        <div className="mb-1 mt-8">
          <h3 className='text-black text-[20px] font-bold'>Business Information (for KYCB)</h3> 
          <p className='text-n100 text-xs font-normal'>Provide your personal information, so we can get to know you.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 w-fit h-fit">
          <div className='w-[340px] h-fit'>
            <TextField label="Business name" type="text" {...register('businessname', { required: true })}/>
          </div>
          <div className=''>
            <TextField label="Business registration number" type="text" {...register('businessregnumber', { required: true })}/>
          </div>
          <div className=''>
            <TextField label="Business phone number" type="text" {...register('businessphonenumber', { required: true })}/>
          </div>
          <div className=''>
            <TextField label="Business email" type="text" {...register('businessemail', { required: true })}/>
          </div>
          <div className=''>
            <TextField label="Business website" type="text" {...register('website', { required: true })}/>
          </div>
          <div className=''>
            <TextField label="Business address" type="text" {...register('businessaddress', { required: true })}/>
          </div>
          <div className=''>
            <SelectField label='Business type' {...register('businesstype', { required: true })}>
              <option value="" disabled>Select Business Type</option>
                {idType && idType.length > 0
                  ? idType.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.businesstype}
                        </option>
                      );
                    })
                  : ''}
            </SelectField>
          </div>
          <div className=''>
            <SelectField label='Business industry' {...register('businessindustry', { required: true })}>
              <option value="" disabled>Select Business Industry</option>
              {bussinessIndustry && bussinessIndustry.length > 0
                ? bussinessIndustry.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.businessindustry}
                      </option>
                    );
                  })
                : ''}
            </SelectField>
          </div>
        </div>

        {/* Form Field */}
        <div className="mb-1 mt-8">
          <h3 className='text-black text-[20px] font-bold'>Financial Information</h3> 
          <p className='text-n100 text-xs font-normal'>Provide your financial information, so we know you status and run a check.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 w-[74%]  h-fit">
          <div className=''>
            <SelectField label='Business industry' {...register('sourceoffund', { required: true })}>
              <option value="" disabled>Select Sources</option>
                {source && source.length > 0
                  ? source.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.sourceoffund}
                        </option>
                      );
                    })
                  : ''}
            </SelectField>
          </div>
          <div className=''>
            <SelectField label='Purpose of account' {...register('purposeofaccount', { required: true })}>
            <option value="" disabled>Select Account Purpose</option>
              {purpose && purpose.length > 0
                ? purpose.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.purposeofaccount}
                      </option>
                    );
                  })
                : ''}
            </SelectField>
          </div>
        </div>

        {/* Form Field */}
        <div className=" my-8 ">
          <h3 className='text-black text-[20px] font-bold'>KYC and AML</h3> 
          <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 w-[74%]  h-fit">
          <div className='flex items-center border border-n50 rounded-lg h-20 px-8 space-x-4'>
            <input id="default-checkbox" type="checkbox" defaultChecked={true} value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <p className='text-n800 text-lg font-medium'>Consent for verification of personal and business information</p>
          </div>
          <div className='flex items-center border border-n50 rounded-lg h-20 px-8 space-x-4'>
            <input id="default-checkbox" type="checkbox" defaultChecked={true} value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <p className='text-n800 text-lg font-medium'>Consent for verification of personal and business information</p>
          </div>
        </div>

        {/* Form Field */}
        <div className=" my-8 ">
          <h3 className='text-black text-[20px] font-bold'>Supporting Documents</h3> 
          <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[74%]  h-fit">
          <Document />
          <Document />
          <Document />
          <Document />
        </div>
      </form>
    </div>
  )
}

export default Account