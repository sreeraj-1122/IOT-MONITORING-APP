import React from 'react'
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className='flex justify-center  w-full h-screen  '>
        <div className='flex flex-col items-center mt-6 gap-2 '>
            <span className='bg-[#d1d0d0] w-24 h-24 flex items-center justify-center text-6xl rounded-full'><FaUser />
            </span>
            <div className='flex flex-col text-base gap-1 w-[320px] mb-1 '>
                <label htmlFor="" className='text-sm'>Username</label>
                <input type="text" name="" id="" className=' p-1 border border-customDark rounded-md px-2'/>
            </div >
            <div className='flex flex-col gap-1 w-[320px] '>
                <label htmlFor="" className='text-sm'>Email</label>
                <input type="text" name="" id="" className=' p-1 border border-customDark rounded-md px-2'/>
            </div>
            <button className='border border-red-500 px-4 py-1 mt-2 rounded-md'>Logout</button>
        </div>
    </div>
  )
}

export default UserProfile