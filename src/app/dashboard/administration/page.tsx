'use client'

import RTable from '@/components/react-table/table'
import  {useMemo} from 'react'

// ** MUI
import {Tooltip} from "@mui/material"
import Badge from '@/components/badge/badge'

// Third Party 
import {FiMoreVertical} from 'react-icons/fi'
import MOCK_DATA from '@/utils/MOCK_DATA.json'


const RenderClaimsToggle = () => (
  <Tooltip title="Settings">
    <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded -z-10'>
      <FiMoreVertical  className='z-0' style={{fontSize: 17}}/>
    </span>
  </Tooltip>   
)

// status color
const claimStatus: any = {
  "deactivated" : "fail",
  "active": "success",
}


const RolesnPri = () => {
   // ***
 const columns = useMemo(
  () => [
      {
        Header: 'Role Name',
        accessor: 'first_name'
      },
      {
        Header: 'Created By',
        accessor: "last_name"
      },
      {
        Header: 'Status',
        accessor: "status",
          Cell: ({ cell:{ value}}:{cell: any}) => <Badge
          type = {claimStatus[value]}
          content = {value}
        />
      },
      {
        Header: "Action",
        Cell: () => <RenderClaimsToggle />
      }
    ],
  []
)

  const data = useMemo(() => MOCK_DATA, [])


  return (
    <div>
      <RTable isCheckBox columnsData={columns} data={data}/>
    </div>
  )
}

export default RolesnPri