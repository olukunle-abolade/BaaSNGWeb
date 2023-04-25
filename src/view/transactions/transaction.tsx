'use client'

import RTable from '@/components/react-table/table'
import  {useMemo} from 'react'

// ** MUI
import {Tooltip} from "@mui/material"
import Badge from '@/components/badge/badge'

// Third Party 
import {FiMoreVertical} from 'react-icons/fi'
import MOCK_DATA from '@/utils/MOCK_DATA2.json'


const RenderClaimsToggle = () => (
  <Tooltip title="Settings">
    <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded -z-10'>
      <FiMoreVertical  className='z-0' style={{fontSize: 17}}/>
    </span>
  </Tooltip>   
)

// status color
const claimStatus: any = {
  "Failed" : "fail",
  "Success": "success",
  "Pending": "pending"
}


const Transaction = () => {
   // ***
 const columns = useMemo(
  () => [
      {
        Header: 'TransactionID',
        accessor: 'TransactionID'
      },
      {
        Header: 'Recipient Name',
        accessor: "Recipient_Name"
      },
      {
        Header: 'Account Number',
        accessor: "Account_Number"
      },
      {
        Header: 'Date',
        accessor: "Date"
      },
      {
        Header: 'Amount',
        accessor: "Amount"
      },
      {
        Header: "Action",
        Cell: () => <RenderClaimsToggle/>
      },
      {
        Header: 'Status',
        accessor: "status",
          Cell: ({ cell:{ value}}:{cell: any}) => <Badge
          type = {claimStatus[value]}
          content = {value}
        />
      }
    ],
  []
)

  const data = useMemo(() => MOCK_DATA, [])


  return (
    <div className = "mt-14">
      <RTable columnsData={columns} data={data}/>
    </div>
  )
}

export default Transaction