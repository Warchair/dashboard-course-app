import React from 'react'
import lightimg from '../../assets/pict/lightmode.png'
import darkimg from '../../assets/pict/darkmode.png'
import { ArrowNarrowLeftIcon} from "@heroicons/react/solid"

function Appearance(props) {
  return (
    <div className='appearance-info py-5 z-10  w-full h-screen'>
      <div>
        <div className='flex gap-2 items-center pb-2 border-b border-gray-200'>
          <button className='md:hidden block' onClick={props.setCloseSet}>
            <ArrowNarrowLeftIcon className="h-6 w-6 text-gray-400" />
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