'use client';

import { FaUser, FaUniversity } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useStore } from '../store';
import { useState } from 'react';

const NavBar = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const { userName,updateName,updatePassword}=useStore();

  
  const Logout=()=>{
      updateName("");
      updatePassword("");
      router.push('/login');
  }

  return (
    <>
    <nav className="bg-white shadow-lg w-full">
      <div className="hidden sm:flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div>
            <FaUniversity size={50} />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">App</h1>
        </div>

        <div className="flex items-center gap-4">
          <div
            onClick={() => router.push('/todo')}
            className="text-lg font-semibold cursor-pointer hover:text-blue-500"
          >
            To-Do
          </div>

          <div
            onClick={() => router.push('/table')}
            className="text-lg font-semibold cursor-pointer hover:text-blue-500"
          >
            Tables
          </div>

          <div className="relative">
            <FaUser
              className="text-xl cursor-pointer hover:text-blue-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />

            {isHovered && userName && (
              <div className="absolute right-0 top-10 mt-2 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                {userName}
              </div>
            )}
          </div>

          <div>
            <button 
              onClick={Logout}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >logout</button>
          </div>
        </div>
      </div>
      {/* <h1>{userName}</h1> */}
    </nav>
    </>
  );
};

export default NavBar;
