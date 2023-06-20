import LeftDash from '@/components/dashboard/LeftDash'
import RightDasboard from '@/components/dashboard/RightDash'


const Dashboard = () => {
  return (
    <div className='flex'>
      <div style={{
          width: "69%",
          height: 900,            
          padding: 25
        }} 
        className = ""
      >
        <RightDasboard />
      </div>
      <div style={{
        width: "30%",
        height: 900,            
        background: "#FFFFFF",
      }} 
      className = "rounded-[10px]" >
        <LeftDash />
      </div>
    </div>
  )
}


const DashboardWrapper = () => {
  return (
    <>
      <Dashboard />
    </>
  )
}

export default DashboardWrapper