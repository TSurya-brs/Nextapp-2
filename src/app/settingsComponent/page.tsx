import React from 'react'
import { FaCog } from 'react-icons/fa';

const Settings = () => {
  return (
    <div>
        <div className="bg-white rounded-lg shadow-lg w-1/2">
            <div className="flex justify-center">
              <FaCog size={80}/>
            </div>
            <div className="p-6 text-center">
              <p className="text-lg">Settings</p>
            </div>
          </div>
      
    </div>
  )
}

export default Settings
