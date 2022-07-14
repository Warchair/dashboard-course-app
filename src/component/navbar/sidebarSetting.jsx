import React from 'react'
import { itemSettings } from '../../component/data/sidebarData'

function SidebarSetting() {

    const dataSidebar = itemSettings.map((item,index) => {
        return (
          <div key={index} className="flex gap-3 items-center py-3 px-3 rounded-xl hover:bg-blue-500 hover:text-white font-semibold group cursor-pointer">
            <div className='w-6 h-6 border-4 border-gray-200 group-hover:border-white rounded-full' >
              <img className='w-full h-full rounded-full' src={item.image} alt="" />
            </div>
            <h3 className='lg:text-sm text-md'>{item.title}</h3>
          </div>
        )
      })

  return (
    <div className='lg:w-80 w-full lg:h-screen h-auto top-0 bottom-0 lg:fixed -z-0 lg:pl-12 lg:mt-0 lg:pt-20 mt-20 lg:pr-5 lg:bg-whitegray relative'>
        <input type="checkbox" name="collapse" id="" className='absolute top-0 inset-x-0 w-full h-12 z-40 cursor-pointer peer opacity-0 lg:hidden block' />
        <div className='lg:bg-transparent bg-blue-800 w-full h-12 flex items-center px-4 lg:text-black text-white'>
          <h3 className='lg:text-2xl text-lg font-semibold my-3 md:bg-transparent'>Settings</h3>
        </div>
        <div className='absolute right-3 top-3 transition-transform duration-500 peer-checked:rotate-180 lg:hidden block'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="my-2 flex flex-col gap-2 lg:mt-10 overflow-hidden transition-all duration-500 lg:max-h-80  max-h-0 peer-checked:max-h-80 bg-whitegray">
          {dataSidebar}
        </div>
      </div>
  )
}

export default SidebarSetting