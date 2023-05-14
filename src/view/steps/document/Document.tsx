import { FC, useState } from 'react';

// ** Third Party
import { AiOutlineFile } from 'react-icons/ai'

// ** Components
import { ProgressBar } from '@/styles/widget.style';

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

const SDocument = ( ) => {
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
            <input id="default-checkbox" type="checkbox" checked value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          </div>
          {/* progressive part */}
          <Progress done='100' days='100' />
        </div>
      </div>
    </div>
  )
}

const Document = () => {
  return (
    <div>
      {/* Form Field */}
      <div className=" my-8 ">
        <h3 className='text-black text-[20px] font-bold'>Supporting Documents</h3> 
        <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[74%]  h-fit">
        <SDocument />
        <SDocument />
        <SDocument />
        <SDocument />
      </div>
    </div>
  )
}

export default Document