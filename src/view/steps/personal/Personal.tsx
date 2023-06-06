'use client'
import { useContext, useEffect, useState } from 'react'

//** RTQ
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/hooks/useTypedSelector'
import { AppDispatch } from '@/store'
import { fetchAsyncBusinessIndustry, fetchAsyncBusinessType, getMiscellaneousCountries, getMiscellaneousGender, getMiscellaneousIdType, getMiscellaneousOccupation } from '@/store/app/miscellaneous'

// ** Third Party 
import { toast } from 'react-hot-toast'

// ** Context
import { StepperContext } from '@/contexts/StepperContext'

// ** Components
import {  SelectField, TextField } from '@/components/FormComponent'

interface IUser {
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


const Personal = () => {
  const {userData, setUserData} = useContext(StepperContext)
  const [idType, setIdType] = useState<any[]>([])
  const [gender, setGender] = useState<any[]>([])
  const [countries, setCountries] = useState<any[]>([])
  const [occupation, setOccupation] = useState<any[]>([])
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getIdType = useAppSelector(getMiscellaneousIdType)
  const getGender = useAppSelector(getMiscellaneousGender)
  const getCountries= useAppSelector(getMiscellaneousCountries)
  const getOccupation= useAppSelector(getMiscellaneousOccupation)

  const handleChange = (e: any) => {
    const {name , value} = e.target
    setUserData({...userData, [name]: value})
  }

  // Get Gender
  useEffect(() => {
  // url
  const url = '/records/gender';
  dispatch(fetchAsyncBusinessType({url}))
    .unwrap()
      .then((originalPromiseResult) => {
        // work need to be done here conditon
        setGender(originalPromiseResult.records)
      })
      .catch((rejectedValueorSerializedError) => {
        {
          rejectedValueorSerializedError &&
            toast.error(rejectedValueorSerializedError.message)
        }
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Country
  useEffect(() => {
    // url
    const url = '/records/countries';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setCountries(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get ID Type
  useEffect(() => {
    // url
    const url = '/records/idtype';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setIdType(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Occupation
  useEffect(() => {
    // url
    const url = '/records/occupation';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setOccupation(originalPromiseResult.records)
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
  // console.log(gender)
  // console.log(occupation)
  // console.log(countries)

  return (
    <div>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-1">
          <h3 className='text-[#2D2D2D] text-4xl font-semibold'>Profile Settings</h3>
          <p className='text-p200 text-lg font-medium'>@oopeoluwa@gmail.com</p>
          <p className='text-n100 text-lg font-normal'>Provide your personal information, so we can get<br/>to know you. </p>
        </div>
      </div>
      {/* Form Field */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-0 mt-10 w-[70%]">
          <TextField 
            label="Full name"
            name='fullName' 
            type="text" 
            placeholder='Ogunmdede Opeoluwa' 
            onChange={handleChange}
            value = {userData?.fullName || ""}
          />
          <SelectField 
            label='Gender'
            name='gender'
            onChange={handleChange}
            value = {userData?.gender || ""}
          >
            <option value="" disabled>Select Gender</option>
            {gender && gender.length > 0
              ? gender.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.gender}
                    </option>
                  );
                })
              : ''}
          </SelectField>
          <TextField 
            label="DOB" 
            type="date"
            name='dob' 
            placeholder='Enter date of birth'
            onChange={handleChange}
            value = {userData?.dob || ""}
          />
          <SelectField 
            label='Nationality'
            name='nationality'
            onChange={handleChange}
            value = {userData?.nationality || ""}
          >
            {countries && countries.length > 0
              ? countries.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.countryname}
                    </option>
                  );
                })
              : ''}
          </SelectField>
          <TextField 
            label="Phone Number" 
            name='phone'
            type="text" 
            placeholder='000-000-000-00'
            onChange={handleChange}
            value = {userData?.phone || ""}
          />
          <TextField 
            label="Address" 
            name='address' 
            type="text" 
            placeholder='Enter address' 
            onChange={handleChange}
            value = {userData?.address || ""}
          />
          <SelectField 
            label='ID type'
            name='idtype'
            onChange={handleChange}
            value = {userData?.idtype || ""}
          >
             <option value="" disabled>Select ID type</option>
             {idType && idType.length > 0
              ? idType.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.idname}
                    </option>
                  );
                })
              : ''}
          </SelectField>
          <TextField 
            label="ID Number" 
            name='idno'
            type="text" 
            placeholder='345-558-377.' 
            onChange={handleChange}
            value = {userData?.idno || ""}
          />
          <SelectField 
            label='Occupation'
            name='occupation'
            onChange={handleChange}
            value = {userData?.occupation || ""}
          >
            <option value="" disabled>Select Occupation</option>
            {occupation && occupation.length > 0
              ? occupation.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.occupation}
                    </option>
                  );
                })
              : ''}
          </SelectField>
          
      </div>
    </div>
  )
}

export default Personal