// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from '@/components/react-apexcharts'

// ** Icon Imports

// ** Types

// ** Component Import

const areaColors = {
  series1: '#12B76A',
  series2: '#F04438',
}

interface PickerProps {
  start: Date | number
  end: Date | number
}

const series = [
  {
    name: 'Income',
    data: [10, 12, 9, 17, 13, 16],
    color: '#FF0000'
  },
  {
    name: 'Expenses',
    data: [6, 8, 7, 11, 8, 10],
    color: '#00FF00'
  }
]

const ApexAreaChart = () => {
  // ** States


  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      height: 400,
      id: 'line-chart',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false, // Hide the toolbar (including the download SVG button)
      }
    },
    tooltip: { shared: false },
    dataLabels: { enabled: false },
    stroke: {
      show: false,
      curve: 'smooth'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      labels: { colors: '#000000' },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [ areaColors.series2, areaColors.series1],
    fill: {
      opacity: 1,
      type: 'line'
    },
    grid: {
      show: true,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: false }
      }
    },
    yaxis: {
      show: false, // Hide the Y-axis
      labels: {
        style: { colors: '#000000' }
      }
    },
    xaxis: {
      axisBorder: { show: true },
      axisTicks: { color: theme.palette.divider },
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },
      labels: {
        style: { colors: theme.palette.text.disabled }
      },
      categories: [
        'Jan',
        'Mar',
        'May',
        'Jul',
        'Sep',
        'Nov'
      ]
    }
  }

  return (
    <Card sx={{height: 247}}>
      {/* <CardHeader
        title='Line Chart'
        subheader='Commercial networks'
        subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <DatePicker
            selectsRange
            endDate={endDate}
            id='apexchart-area'
            selected={startDate}
            startDate={startDate}
            onChange={handleOnChange}
            placeholderText='Click to select a date'
            customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
          />
        }
      /> */}
      <CardContent>
        <div className='flex justify-between items-center mb-3'>
          <h3>HightLights</h3>
          <div className="w-50 md:w-1/8 mb-6 md:mb-0">
            <div className="">
              <select
                className="block appearance-none w-full bg-white border border-n40 text-n400 text-sm py-1 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-semibold"
                id="grid-state"
              >
                <option>Month</option>
                <option>Jan</option>
                <option>Feb</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <ReactApexcharts type='line' height="100%" width={510} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexAreaChart
