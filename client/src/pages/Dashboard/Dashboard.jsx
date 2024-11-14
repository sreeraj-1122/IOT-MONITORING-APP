import React, { useState } from 'react'
import ToolBar from '../../components/Dashboard/ToolBar'
import SideBar from '../../components/Dashboard/SideBar'

const Dashboard = () => {
  const [isOpen,setIsopen]=useState(false)
  return (
    <div>
      <ToolBar isOpen={isOpen} setIsopen={setIsopen}/>
      {
      isOpen&&<SideBar />
      }
    </div>
  )
}

export default Dashboard