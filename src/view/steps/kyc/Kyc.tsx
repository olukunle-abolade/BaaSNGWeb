
const Kyc = () => {
  return (
    <div>
      {/* Form Field */}
      <div className=" my-8 ">
        <h3 className='text-black text-[20px] font-bold'>KYC and AML</h3> 
        <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 w-[74%]  h-fit">
        <div className='flex items-center border border-n50 rounded-lg h-20 px-8 space-x-4'>
          <input id="default-checkbox" type="checkbox" checked value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <p className='text-n800 text-lg font-medium'>Consent for verification of personal and business information</p>
        </div>
        <div className='flex items-center border border-n50 rounded-lg h-20 px-8 space-x-4'>
          <input id="default-checkbox" type="checkbox" checked value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <p className='text-n800 text-lg font-medium'>Consent for verification of personal and business information</p>
        </div>
      </div>
    </div>
  )
}

export default Kyc