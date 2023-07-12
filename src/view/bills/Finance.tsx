'use client'

import Image from "next/image";

// ** Image
import Lead from '@/assets/images/bill/lead.svg'
import Bank from '@/assets/images/bill/bank.svg'
import Finances from '@/assets/images/bill/finance.svg'

const utils = [
  {
    id: 1,
    name: 'Financial Institution',
    image: Finances
  },
  {
    id: 2,
    name: 'BankOne MFBs',
    image: Bank
  },
  {
    id: 3,
    name: 'Lending Service',
    image: Lead
  }
]

const Finance = () => {
  return (
    <div>
      {/*  */}
      <h2 className="text-lg text-[#2D2D2D] font-medium mb-3" >Finance</h2>
      <div className="flex space-x-5">
        {
          utils.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}>
                {/*  */}
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-kgsec'>
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

export default Finance