import { FaEnvelope, FaPhoneAlt, FaClock,FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <div className=" bg-gray-600">
        <div className='py-5 flex flex-col gap-10 lg:flex-row lg:justify-around lg:items-center'>
                <div className="flex flex-col items-center justify-center">
                    <img src="/VSF logo.png" alt="image" width={50} />
                    <h1 className='font-bold text-lg'>VSF Coporation</h1>
                    <p>Finance Company</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div><h1 className='font-bold text-lg'>Contact and Support</h1></div>
                    <div className='flex justify-center items-center'>
                        <div><FaEnvelope/></div>
                        <div>nyros@gmail.com</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div><FaPhoneAlt/></div>
                        <div>+91 9876543210</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div><FaClock/></div>
                        <div>Mon - Fri :10AM to 6PM</div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div><h1 className='font-bold text-lg'>Follow us on </h1></div>
                    <div className='flex items-center justify-between gap-10'>
                        <div><FaFacebook/></div>
                        <div><FaTwitter/></div>
                        <div><FaLinkedin/></div>
                    </div>
                </div>
            </div>
            <div className='py-4 bg-gray-800'>
                <p className='text-center text-white'>2025 All rights reserved to Nyros</p>
            </div>
        </div>
        
      
    </>
  )
}

export default Footer
