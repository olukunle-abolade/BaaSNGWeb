
import { useContext, useEffect } from 'react'

// ** Components
import {  SelectField, TextField } from '@/components/FormComponent'

// ** Third Party 
import { toast } from 'react-hot-toast'

//** RTQ
import { useAppSelector } from '@/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { fetchAsyncBusinessIndustry, fetchAsyncBusinessType, getMiscellaneousBusinessType, getMiscellaneousIndustry } from '@/store/app/miscellaneous'

// ** Context
import { StepperContext } from '@/contexts/StepperContext'


interface IBussiness {
  fullName: string
  dob: string
  gender: string
  nationality: string
  phone: string
  address: string
  idtype: string
  idno: string
  occupation: string
}

const Bussiness = () => {
  const {userData, setUserData} = useContext(StepperContext)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const idType = useAppSelector(getMiscellaneousBusinessType)
  const bussinessIndustry = useAppSelector(getMiscellaneousIndustry)


  const handleChange = (e: any) => {
    const {name , value} = e.target
    setUserData({...userData, [name]: value})
  }


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

  // console.log(idType)
  // console.log(bussinessIndustry)

  return (
    <div>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-2">
          <h3 className='text-[#2D2D2D] text-4xl font-semibold'>Business Information (for KYCB)</h3>
          <p className='text-n100 text-lg font-normal'>Provide your personal information, so we can get<br/>to know you. </p>
        </div>
      </div>
      {/* Form Field */}
      <div className="grid grid-cols-2 gap-x-4 w-fit h-fit">
        <div className='h-fit'>
          <TextField 
            label="Business name" 
            type="text" 
            name='business_name'
            placeholder='Ninja Creative Studio' 
            onChange={handleChange}
            value = {userData?.business_name || ""}
          />
        </div>
        <div className=''>
          <TextField 
            label="Business registration number" 
            type="text" 
            name='reg_number'
            placeholder='345-558-377' 
            onChange={handleChange}
            value = {userData?.reg_number || ""}
          />
        </div>
        <div className=''>
          <TextField 
            label="Business phone number" 
            type="text" 
            placeholder='345-558-377' 
            name='business_number'
            onChange={handleChange}
            value = {userData?.business_number || ""}
          />
        </div>
        <div className=''>
          <TextField 
            label="Business email" 
            type="text" 
            name='business_email' 
            placeholder='ninjacreativestudio@gmail.com' 
            onChange={handleChange}
            value = {userData?.business_email || ""}
          />
        </div>
        <div className=''>
          <TextField 
            label="Business website" 
            type="text" 
            name='business_website'
            placeholder='www.baas.com' 
            onChange={handleChange}
            value = {userData?.business_website || ""}
          />
        </div>
        <div className=''>
          <TextField 
            label="Business address" 
            type="text" 
            name='business_address'
            placeholder='12 Jame John close, Ikoji Lagos.' 
            onChange={handleChange}
            value = {userData?.business_address || ""}
          />
        </div>
        <div className=''>
          <SelectField 
            label='Business type'
            name='business_type'
            onChange={handleChange}
            value = {userData?.business_type || ""}
          >
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
          <SelectField 
            label='Business industry'
            name='business_industry'
            onChange={handleChange}
            value = {userData?.business_industry || ""}
          >
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
    </div>
  )
}

export default Bussiness