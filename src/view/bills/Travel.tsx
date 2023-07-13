'use client'

import Image from "next/image";

// ** Image
import Toll from '@/assets/images/bill/toll.svg'
import Travels from '@/assets/images/bill/travel.svg'
import Trip from '@/assets/images/bill/trip.svg'


const utils = [
  {
    id: 1,
    name: 'Travel',
    image: Toll
  },
  {
    id: 2,
    name: 'Travel&Hotel',
    image: Travels
  },
  {
    id: 3,
    name: 'Travel&Trip(Bus Ticket)',
    image: Trip
  }
]

const Travel = () => {
  return (
    <div>
      {/*  */}
      <h2 className="text-lg text-[#2D2D2D] font-medium mb-3" >Travel</h2>
      <div className="flex space-x-5">
        {
          utils.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}>
                {/*  */}
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-krsec'>
                  <Image
                    src={util.image}
                    alt=""
                    width={200}
                    height={70}
                  />
                </div>
                <h2 className="text-[14px] text-black font-medium">{util.name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Travel