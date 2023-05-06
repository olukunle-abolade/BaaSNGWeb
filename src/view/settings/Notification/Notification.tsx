// ** Components
import CustomButton from '@/components/CustomButton'


const Notification = () => {
  return (
    <div className='h-full'>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-1">
          <h3 className='text-[#2D2D2D] text-xl font-semibold'>Notification settings</h3>
          <p className='text-[#2D2D2D] text-sm font-normal'>Adjust notification settings</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
          <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
        </div>
      </div>


      {/*  Switch */}
      <div className="grid  gap-x-4 mt-2 w-1/2 h-fit">
        <table className="border-separate border-spacing-y-20 ">
          <thead className='space-y-8'>
            <tr className='w-full border border-slate-300 space-y-2'>
              <td className="text-black text-sm align-text-top font-medium">
                Transaction receipts
                <p className='text-n100 text-sm font-normal mt-2'>These are notifications for alerts on your<br/>transactions.(Debits and credits)</p>
              </td>
              <td className="flex flex-col space-y-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
              </td>
            </tr>
            <tr>
            <td className="text-black text-sm align-text-top font-medium">
                Messages
                <p className='text-n100 text-sm font-normal mt-2'>These are notifications for messages<br/>received from chats and direct<br/>messages.</p>
              </td>
              <td className="flex flex-col space-y-4">
                <label className="relative inline-flex items-center w-full cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer w-full">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                </label>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Notification