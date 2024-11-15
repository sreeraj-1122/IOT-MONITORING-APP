import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import useFormattedDate from './../../Hooks/useFormattedDate ';

const SubLists = ({device,location,disconnected}) => {
    const formattedDate = useFormattedDate(disconnected);
  return (
    <div className='h-16 rounded-lg border border-customDark px-3 w-full mb-3  '>
        <div className='flex justify-between items-center w-full h-full'>
            <div className="text-[#1E1E1E] ">
                <span className="text-sm font-medium">{device}</span>
                <span className="flex items-center gap-2 text-sm ">
                <IoLocationOutline />
                    {location}
                </span>
            </div>
            <span className='text-sm'>{formattedDate}</span>
        </div>
    </div>
  )
}

export default SubLists