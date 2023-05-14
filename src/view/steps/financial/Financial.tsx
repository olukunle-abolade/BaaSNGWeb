// ** Components
import {  SelectField } from '@/components/FormComponent'

const Financial = () => {
  return (
    <div>
      <div className="mb-1 mt-8">
        <h3 className='text-black text-[20px] font-bold'>Financial Information</h3> 
        <p className='text-n100 text-xs font-normal'>Provide your financial information, so we know you status and run a check.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 w-[74%]  h-fit">
        <div className=''>
          <SelectField label='Business industry'>
            <option value="">Finance</option>
          </SelectField>
        </div>
        <div className=''>
          <SelectField label='Purpose of account'>
            <option value="">Investment</option>
          </SelectField>
        </div>
      </div>
    </div>
  )
}

export default Financial