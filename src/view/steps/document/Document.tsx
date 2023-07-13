import { FC, useState, useContext , useRef} from 'react';
import Image from 'next/image'

// ** Third Party
import { AiOutlineFile } from 'react-icons/ai'

// ** Context
import { StepperContext } from '@/contexts/StepperContext'

// ** Components
import { ProgressBar } from '@/styles/widget.style';

// ** Image
import Upload from "@/assets/images/upload.png"


interface IProgress {
  done: number;
  days: number;
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

interface ISDocument {
  docName: string;
  example?: string;
}

const SDocument: FC<ISDocument> = ({docName, example}) => {
  const [showProgress, setShowProgress] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setShowProgress(!showProgress)
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (event) => {
        const progressPercent = (event.loaded / event.total) * 100;
        setProgress(progressPercent);
      });

      xhr.open('POST', '/upload'); // Replace with your upload endpoint
      xhr.send(file);

      setFileName(file.name); // Set the file name
    }
  };


  // console.log(fileInputRef)
  return (
    <div className="space-y-2">
      {/* title */}
      <h3 className='text-sm text-n800 font-medium'>{docName} <span className='text-xs text-n100 font-normal'> {example && `(e.g. ${example && example})`}</span></h3>
      <div className="flex flex-col justify-center w-[342px] h-[126px] rounded-xl border border-p200 ">
        {
          !showProgress ?
          <label htmlFor="profile">
            <div className="px-4 flex flex-col items-center justify-center space-y-2">
              <Image 
                src={Upload}
                alt="upload__image"
                height="40"
                width="40"
                // style={{height: "auto", width: "auto"}}
              />
              <p className='text-n100 text-xs font-normal'>Click to upload or drag and drop</p>
              <p className='text-n100 text-xs font-normal'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              id="profile"
              name="profile"
              className='hidden'
            />
          </label> :
          /** Progressive Bar */
          <div className="px-4">
            <div className="flex justify-between ">
              <div className='flex items-center space-x-2'>
                <div className="flex items-center justify-center w-[38.29px] h-[38.29px] rounded-full border-4 border-p50 bg-[#F5F5F5]">
                  <AiOutlineFile  color = "#7E6EBF" />
                </div>

                <div className="">
                  {/* file name  */}
                  <h3 className='text-p200 text-sm font-medium'>{fileName}</h3>
                  {/* file size */}
                  <p className='text-n100 text-xm font-normal'>200 KB</p>
                </div>
              </div>
              <input id="default-checkbox" type="checkbox" defaultChecked={true} value=""  className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            {/* progressive part */}
            <Progress done={progress} days={progress} /> 
          </div>
        }
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
        <SDocument docName='ID documents' example = "passport, ID card"/>
        <SDocument docName='Business registration' example='Business license'/>
        <SDocument docName='Financial statements'  />
        <SDocument docName='Proof of address' example='utility bill,lease agreement'/>
      </div>
    </div>
  )
}

export default Document