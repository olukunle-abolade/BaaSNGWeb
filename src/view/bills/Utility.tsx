'use client'

import Image from "next/image";

// ** Image
import Tv from '@/assets/images/bill/tv.svg'
import Internet from '@/assets/images/bill/internet.svg'
import Water from '@/assets/images/bill/water.svg'
import Electric from '@/assets/images/bill/electric.svg'

const utils = [
  {
    id: 1,
    name: 'TV',
    image: Tv
  },
  {
    id: 2,
    name: 'Internet',
    image: Internet
  },
  {
    id: 3,
    name: 'Water',
    image: Water
  },
  {
    id: 4,
    name: 'Electricity',
    image:Electric
  }
]

const Utility = () => {
  return (
    <div>
      {/*  */}
      <h2 className="text-lg text-[#2D2D2D] font-medium mb-3" >Utilities</h2>
      <div className="flex space-x-5">
        {
          utils.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}>
                {/*  */}
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-kpsec'>
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

export default Utility