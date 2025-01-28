"use client";

import { div } from 'framer-motion/client';
// import {useTheme} from "next-themes";
// import { useEffect, useState } from "react";

// export function ThemeSwitcher() {
//   // const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   // useEffect(() => {
//   //   setMounted(true)
//   // }, [])

//   // if(!mounted) return null

//   return (
//     <div>
//       The current theme is: {theme}
//       <button onClick={() => setTheme('light')}> <div className="p-2 border bg-blue-500">Light</div></button>
//       <button onClick={() => setTheme('dark')}><div className="p-2 border bg-blue-900">Dark</div></button>
//     </div>
//   )
// };


// const Log = () => {
//   return (
//     <div className='border border-red-500 h-screen flex justify-center items-center ' >
//       <div className='bg-white shadow-xl w-1/2 p-10 flex flex-col items-center'>
//         <form action="submit">
//          <div className='p-4'>
//             <label htmlFor="name">UserName:</label>
//             <input type="text" id='name' placeholder="Enter name" minLength={5}/>
//          </div >
//           <div className='p-4'>
//           <label htmlFor="pass">UserName:</label>
//             <input type="password" id='pass' placeholder="Enter password" minLength={5} />
            
//           </div>
//           <div className='p-4'>
//             <button type="submit"> Submit </button> 
//           </div>
//         </form>
        
//       </div>
//     </div>
//   )
// }

// export default Log

const Prac=()=>{
  return(
    <div>
      <div className='bg-blue-500 w-24'>sssss</div>
      {/* <div className="bg-green-500 w-80">yyyy</div> */}
      <div className="bg-red-500 min-w-32">This div will never be smaller than 8rem</div>
      <div className="bg-yellow-500 min-w-full">This div will never be smaller than 100% of its parent</div>
      <div className="bg-green-500 min-w-screen-sm">This div will never be smaller than the small screen width</div>

      <div className="bg-red-500 max-w-32">This div will never be wider than 8rem</div>
<div className="bg-blue-500 max-w-full">This div will never be wider than 100% of its parent</div>
<div className="bg-orange-500 max-w-screen-lg">This div will never be wider than 1024px</div>


    </div>

  )
}
export default Prac