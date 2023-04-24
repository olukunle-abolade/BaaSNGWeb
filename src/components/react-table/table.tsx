'use client'

/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, {useMemo, useState} from 'react'
import {useTable, useGlobalFilter, usePagination, useRowSelect, useFilters} from 'react-table'
import {Box} from "@mui/material"
import { useRouter } from 'next/router'
import { TableCard, TableWrapper } from './styled-react-table'
import MOCK_DATA from '@/utils/MOCK_DATA.json'

// 
import {FiMoreVertical} from 'react-icons/fi'
// Custom component to render Genres 
const Genres = () => {
  const router = useRouter();
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
    <>
      <button  >Details</button>
    </>
  );
};



export const GlobalFilter = () => {
  // Create a state
  const [filterInput, setFilterInput] = useState("");
  
  // Update the state when input changes
  const handleFilterChange = (e: any) => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };

  return (
    <span className='flex items-center'>
      <p className='text-kblackCom text-body4 mr-2'>Search : {' '}</p>
      <input value = {filterInput || ''}  onChange = {handleFilterChange} className="border-[#CED4DA] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ></input>
    </span>
  )
}

interface ICheckBox { 
  indeterminate: any;

}

const IndeterminateCheckbox: React.FC<ICheckBox> = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef:any = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)


// interface IRTable {
//   footerShow: any;
//   search: any;
//   paginate: any;
//   COLUMNS: any;
//   MOCK_DATA: any;
//   children: any;
// }

 
const RTable = () => {
   // ***
   const columns:any = React.useMemo(
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
      accessor : "status"
    },
    {
      Header: "Action",
       Cell: () => <FiMoreVertical color='#000000'/>
    }
  ],
  []
)

  // const data = useMemo(() => MOCK_DATA, [])

  // console.log(MOCK_DATA)
  const data = React.useMemo(() => MOCK_DATA, [])


  console.log(data)
  console.log(columns)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  }, useGlobalFilter,useFilters, usePagination,useRowSelect, (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => {
      return [
        {
          id: 'selection',
          Header: ({
            getToggleAllRowsSelectedProps
          }: {getToggleAllRowsSelectedProps: any}) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell : ({ row }: {row: any}) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps} />
          )
        },
        ...columns
      ]
    })
  });

  // const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow , nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, setPageSize,selectedFlatRows, setFilter, state} = tableInstance

  // const {pageIndex, pageSize} = state


 
  return (
    <TableCard>
      <TableWrapper>
        <Box sx={{paddingTop: 2}}/>
        {/* {children} */}

        {/* <p className='px-4 text-kblackCom font-semibold text-body5 mb-4' >Recent Visit</p> */}
        {/* <div className=' flex justify-between items-center'>
          {
            paginate &&
            <div className='flex items-center mb-4'>
              <p className='mr-2 blackcom text-body4'>Show</p>
              <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))} className= " appearance-none block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {
                  [5, 10, 25, 50].map(pageSize => (
                    <option className='text-blackcom font-normal text-[8px]' key = {pageSize} value = {pageSize}>
                      {pageSize}
                    </option>
                  ))
                }
              </select>
              <p className='ml-2 blackcom text-body4'>entries</p>
            </div>
          }
          {
            search && <div className='mb-6' ><GlobalFilter setFilter = {setFilter} /> </div>
          }
          {children}
        </div> */}
        {/* <Box sx={{marginTop: 3}}/> */}
        <table className='table-spacing' {...getTableProps()}>
          <thead>
            {
              headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[] }) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column: { getHeaderProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>; render: (arg0: string) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
                      // eslint-disable-next-line react/jsx-key
                      <th {...column.getHeaderProps()} > {column.render("Header")} </th>
                    ))
                  }
                </tr> 
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              rows.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell: any) => {
                        return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                      })
                    }
                  </tr>
                )
              })
            }
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table> 
          {/* <div className='px-4 flex justify-between'>
              <div>
                {
                  footerShow && 
                  <div className='flex items-center'>
                    <p className='mr-2 blackcom text-body4'>Show</p>
                    <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))} className= " appearance-none block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      {
                        [5,10, 25, 50].map(pageSize => (
                          <option className='text-blackcom font-normal text-[8px]' key = {pageSize} value = {pageSize}>
                            {pageSize}
                          </option>
                        ))
                      }
                    </select>
                    <p className='ml-2 blackcom text-body4'>entries</p>
                  </div>
                }
              </div>
              <div className='flex items-center'>
                  <span className='mr-3 text-body4 text-kblackCom'>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong> {' '}
                  </span>
                  <div>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage} className="previous text-body4 rounded-l text-kblackCom">&laquo; Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage} className="next text-body4 rounded-r">Next &raquo;</button>
                  </div>
              </div>    
          </div> */}
          <Box sx={{paddingBottom: 5}}/> 
      </TableWrapper>
    </TableCard>
  )
}

export default RTable