    'use client'

    import React, { useState } from 'react'
    import { FaBell, FaUser, FaRegSquare ,FaBars, FaTimes} from 'react-icons/fa'

    const Header = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null)
    const [isHovered2, setIsHovered2] = useState<number | null>(null)
    // console.log(isHovered, isHovered2)

    const navitems = ['Home', 'Dashboard', 'Tasks', 'Collections', 'Reports']
    const hoveritems = ['one', 'two', 'three', 'four', 'five']

    return (
        <>
        <div className='flex flex-col'>
            <div className=''>
                <div className=' flex justify-between items-center'>
                    <div className='bg-white shadow-lg rounded-lg p-3'>VSF</div>
                    <div className='bg-white shadow-lg rounded-lg p-3'>
                    <img src="/VSF logo.png" alt="image" width={50} />
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-3 flex space-x-10 items-center'>
                    <div className='grid grid-cols-2'>
                        <div><FaRegSquare size={12} /></div>
                        <div><FaRegSquare size={12} /></div>
                        <div><FaRegSquare size={12} /></div>
                        <div><FaRegSquare size={12} /></div>
                    </div>
                    <div > <FaBell size={20} /></div>
                    <div >|</div>
                    <div ><FaUser size={20} /></div>
                    </div>
                    <div>
                    <button> <FaBars/> </button>
                </div>
                </div>
                
            </div>
            
            <div>
                
                <div className='bg-slate-500 flex justify-between items-center py-2'>
                    <div className='flex space-x-10'>
                    {navitems.map((item, index) => (
                        <div
                        key={index}
                        className='relative bg-white shadow-lg rounded-md p-1 cursor-pointer'
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                        >
                        {item}
                        {/* FIRST HOVER */}
                        {isHovered === index && (
                            <div className='absolute top-full left-0 bg-gray-200 rounded shadow-lg'>
                            {hoveritems.map((hoverItem, hoverIndex) => (
                                <div
                                key={hoverIndex}
                                className="relative p-3 cursor-pointer"
                                onMouseEnter={() => setIsHovered2(hoverIndex)}
                                onMouseLeave={() => { setIsHovered2(null); }}
                                >
                                {hoverItem }

                                {/* SECOND HOVER */}
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
                    <div className=''>
                    <input
                        type="text"
                        placeholder="Search"
                        className=" py-2 border rounded-md"
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    }

    export default Header
