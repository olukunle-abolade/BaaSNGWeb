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
    data: [10, 12, 9, 17, 13, 16, 14, 24, 22, 18, 27, 28],
    color: '#FF0000'
  },
  {
    name: 'Expenses',
    data: [6, 8, 7, 11, 8, 10, 9, 18, 16, 14, 20, 22],
    color: '#00FF00'
  }
]

const ApexAreaChart = () => {
  // ** States


  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      height: 240,
      id: 'line-chart',
      zoom: {
        enabled: false
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
      horizontalAlign: 'left',
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
        lines: { show: true }
      }
    },
    yaxis: {
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
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
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
        <ReactApexcharts type='area' height={240} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexAreaChart
