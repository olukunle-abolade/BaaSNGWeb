'use client'


const utils = [
  {
    id: 1,
    name: 'Education'
  },
  {
    id: 2,
    name: 'Association & Societies'
  }
]

const Education = () => {
  return (
    <div>
      {/*  */}
      <h2 className="text-lg text-[#2D2D2D] font-medium mb-3" >Education</h2>
      <div className="flex space-x-5">
        {
          utils.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}>
                {/*  */}
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-kysec'></div>
                <h2 className="text-[14px] text-black font-medium">{util.name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education