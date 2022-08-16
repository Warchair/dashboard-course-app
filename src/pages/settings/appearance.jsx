import React from 'react'
import lightimg from '../../assets/pict/lightmode.png'
import darkimg from '../../assets/pict/darkmode.png'

function Appearance(props) {
  return (
    <div className='appearance-info py-5 z-10  w-full h-screen'>
      <div>
        <div className='flex gap-2 items-center pb-2 border-b border-gray-200'>
          <button className='md:hidden block' onClick={props.setCloseSet}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className='md:text-2xl text-xl font-semibold text-black'>Appearance</h1>
        </div>
        <div className='mt-5'>
          <h4 className='text-lf font-semibold text-gray-800 '>Theme</h4>
          <div className='flex gap-3 mt-5'>
              <div className='flex flex-col gap-2 hover:text-blue-500'>
                  <img src={lightimg} alt="" className=' w-44 h-28 rounded-md border-4 border-transparent hover:border-blue-500 cursor-pointer ' />
                <h6 className='font-medium text-md '>Light</h6>
              </div>
              <div className='flex flex-col gap-2 hover:text-blue-500'>
                <img src={darkimg} alt="" className=' w-44 h-28 rounded-md border-4 border-transparent hover:border-blue-500 cursor-pointer' />
                <h6 className='font-medium text-md '>Dark</h6>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appearance