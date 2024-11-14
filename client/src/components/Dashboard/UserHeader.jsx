import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthContext from '../../contexts/AuthContext';

const UserHeader = () => {
    const { logout } = useContext(AuthContext);
    return (
      <header className="bg-gray-100 h-[48px] text-white p-4 flex items-center border-b-[1px] border-customDark shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/dashboard"
            className="text-lg font-bold text-black"
          >
            Panel0
          </Link>
          <nav>
           
                <div className="flex gap-4 items-center">
                  <span className=" bg-customDark w-9 h-9 flex items-center justify-center rounded-full">
                    <FaUser className="text-gray-800 text-lg"/>
                  </span>
                  <span  className=" bg-customDark w-9 h-9 flex  items-center justify-center rounded-full" onClick={logout}>
                    <RiLogoutBoxRLine className="text-gray-800 text-lg"/>
                  </span>
                </div>
          </nav>
        </div>
      </header>
    );
}

export default UserHeader