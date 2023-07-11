import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoMdMore } from 'react-icons/io';
import Image from 'next/image';

type IData = {
  id: number;
  name: string;
  image: string;
}


export default function BasicPopover({data}: {data: IData[]}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button className='appearance-none' aria-describedby={id} onClick={handleClick}>
        <IoMdMore className='text-kblackCom' size={20}/> 
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {
          data && data.map((d,i) => {
            return (
              <div className='w-[270px] py-3 px-3' key = {i}>
                {/*  */}
                <div className = "flex flex-row space-x-4">
                  {/* icon */}
                  <Image
                    src= {d.image}
                    alt='image'
                    height={30}
                    width={30}
          
                    style={{zIndex: 1000, height: 'auto', width: 'auto'}}
                  />
                  {/*  description */}
                  <p className='text-black text-[16px] font-medium '>{d.name}</p>
                </div>
              </div>
            )
          })
        }
      </Popover>
    </div>
  );
}
