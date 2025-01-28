'use client'

import React, { useState } from 'react'
import { FaBell, FaUser, FaRegSquare, FaBars, FaTimes } from 'react-icons/fa';
import { FaHome, FaTachometerAlt, FaListAlt, FaMoneyBill, FaChartBar, FaSuitcase, FaRegFileAlt } from 'react-icons/fa';

const Header = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [isHovered2, setIsHovered2] = useState<number | null>(null)
  const [istoggle, setistoggle] = useState<boolean>(false)  

  const navitems = ['Home', 'Dashboard', 'Tasks', 'Collections', 'Reports'] 
  const navitemsicons=[<FaHome/>, <FaTachometerAlt/>,<FaListAlt/>,<FaMoneyBill/>,<FaChartBar/>]
  const hoveritems = ['one', 'two', 'three', 'four', 'five']

  return (
    <>
      <div className='flex flex-col '>
        {/* FIRST HEADER */}
        <div className='bg-gray-600 py-4 lg:py-0'>
          <div className='flex justify-between items-center'>
            <div className='bg-white shadow-lg rounded-lg p-3 '>VSF</div>
            <div className='bg-white shadow-lg rounded-lg p-3 hidden md:flex'>
              <img src="/VSF logo.png" alt="image" width={50} />
            </div>
            <div className='bg-white shadow-lg rounded-lg p-3 flex space-x-10 items-center'>
              <div className='grid grid-cols-2'>
                <div><FaRegSquare size={12} /></div>
                <div><FaRegSquare size={12} /></div>
                <div><FaRegSquare size={12} /></div>
                <div><FaRegSquare size={12} /></div>
              </div>
              <div><FaBell size={20} /></div>
              <div>|</div>
              <div><FaUser size={20} /></div>
            </div>

            {/* {Toggle} */}
            <div className='lg:hidden'>
              <button onClick={() => setistoggle(!istoggle)}>
                {istoggle ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* SECOND HEADER */}
        
        
        {/* <div className={`bg-slate-500 py-2 ${istoggle ? 'flex justify-between items-center' : 'hidden md:flex justify-between items-center'}`}>
          <div className='flex flex-col justify-between items-center md:flex-row justify-between items-center gap-6 '>
            {navitems.map((item, index) => (
              <div
                key={index}
                className='relative bg-white shadow-lg rounded-md p-1 cursor-pointer'
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item}

                FIRST HOVER
                {isHovered === index && (
                  <div className='absolute top-1 md:top-full left-full md:left-0 bg-gray-200 rounded shadow-lg z-20'>
                    {hoveritems.map((hoverItem, hoverIndex) => (
                      <div 
                        key={hoverIndex}
                        className="relative p-3 cursor-pointer"
                        onMouseEnter={() => setIsHovered2(hoverIndex)}
                        onMouseLeave={() => setIsHovered2(null) }
                      >
                        {hoverItem}
                        

                        SECOND HOVER
                        {isHovered2 === hoverIndex && (
                          <div className='absolute top-5 left-full ml-2 bg-gray-200 rounded shadow-lg'>
                            {hoveritems.map((hoverItem2, hoverIndex2) => (
                              <div key={hoverIndex2} className="p-3 cursor-pointer">
                                {hoverItem2}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="py-2 border rounded-md "
            />
          </div>
        </div> */}


          <div className={` ${istoggle ? '':'hidden lg:block'}`}>
            <div className='bg-gray-700 m-5 lg:m-0 p-5  lg:p-0 lg:flex justify-between items-center'>
              <ul className='text-white lg:flex justify-between items-center gap-10'>
                {navitems.map((item,index)=>(
                  <div 
                    key={index}   
                    className='py-3 cursor-pointer lg:relative hover:bg-gray-800 rounded'
                    onMouseEnter={()=>setIsHovered(index)}
                    onMouseLeave={()=>setIsHovered(null)}
                    >
                    <div className='flex items-center gap-2 border-b border-white lg:border-none'>
                      {navitemsicons[index]}
                      <li >{item}</li>
                    </div>
                    
                    <div>
                    {index === isHovered && (
                      <ul className='bg-gray-800  lg:absolute left-0 top-full'>
                        {hoveritems.map((item,index)=>(
                          <div 
                          key={index}
                          className='w-28 p-3'
                          >
                            <li>{item}</li>
                          </div>
                        ))}
                      </ul>
                    )}
                    </div>
                    </div>
                ))}
              </ul>
             <div className='py-4 lg:py-0 flex items-center justify-center order-first lg:order-last' >
              <div className='border border-white lg:bg-blue-400 rounded flex items-center justify-center w-64 lg:w-auto p-2 lg:p-0'>
                  <div className='text-white lg:p-2'><FaRegFileAlt size={20} /></div>
                  <div className=''>
                    <input 
                      type="search" 
                      placeholder='search'
                      className='w-48 lg:focus:w-72 h-9 px-4 rounded'
                        />
                  </div>
                </div>
             </div>
            </div>
              
          </div>

      </div>
    </>
  )
}

export default Header
