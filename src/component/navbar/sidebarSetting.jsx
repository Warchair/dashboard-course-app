import React from 'react'
import { NavLink } from 'react-router-dom'
import { itemSettings } from '../data/data'

function SidebarSetting(props) {

    const dataSidebar = itemSettings.map((item,index) => {
        return (
          <NavLink to={item.layout + item.location} onClick={props.setOpenSet}>
            <div key={index} className="flex gap-3 items-center py-3 px-3 rounded-xl hover:bg-blue-500 hover:text-white font-semibold group cursor-pointer">
              <div className='w-6 h-6 border-4 border-gray-200 group-hover:border-white rounded-full' >
                <img className='w-full h-full rounded-full' src={item.image} alt="" />
              </div>
              <h3 className='lg:text-sm text-md'>{item.title}</h3>
            </div>
          </NavLink>
        )
      })

  return (
    <div className='px-4'>
        <h3 className='lg:text-2xl text-lg font-semibold py-4'>Settings</h3>
        <div className="my-2 flex flex-col gap-2  ">
        {dataSidebar}
        </div>
    </div>
  )
}

export default SidebarSetting