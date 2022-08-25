import React from 'react'
import { NavLink } from 'react-router-dom'
import { DocumentTextIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/outline"


function CardCourse(props) {
  return (
        <NavLink className="px-3 py-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-xl w-72" to={`./${props.id}`}>
        <div className='rounded-xl relative h-36 w-64'>
          <img className='rounded-xl w-full h-full object-cover' src={props.image} alt={props.title} />
          <div className='absolute bottom-2 left-2 flex gap-2 items-center text-sm px-2 py-1 rounded-full bg-white dark:bg-slate-800'>
            <p className='text-xs'>{props.level}</p>
            <img src={props.icons} alt="" />
          </div>
        </div>
        <div className='mt-3 flex flex-col gap-4'>
          <h3 className='text-md font-semibold text-gray-900 dark:text-white'>{props.title}</h3>
          <div className='flex gap-3 items-center'>
              <div className='h-5 w-5 rounded-full bg-blue-100 flex justify-center items-center'>
                  <img src={props.avatar} alt="" className='w-4 h-4' />
              </div>
              <p className='font-medium text-xs text-gray-400 dark:text-gray-200'>{props.person}</p>
          </div>
          <div className="class flex justify-evenly item-center gap-3">
            <div className='flex gap-2 items-center'>
              <DocumentTextIcon className="h-4 w-4" />
              <p className='text-xs'>24</p>
            </div>
            <div className='flex gap-2 items-center'>
              <ShieldCheckIcon className="h-4 w-4" />
              <p className='text-xs'>9</p>
            </div>
            <div className='flex gap-2 items-center'>
              <UserGroupIcon className="h-4 w-4" />
              <p className='text-xs'>30</p>
            </div>
          </div>
          <div className='w-full h-2 bg-gray-100 dark:bg-slate-900 rounded-lg'>
            <div className='w-1/4 h-full bg-gray-900 dark:bg-blue-600 rounded-lg'></div>
          </div>
          <div className='text-xs flex justify-between text-gray-500 dark:text-gray-400'>
            <h3>Complated : {props.percent}%</h3>
            <h3>Days: 4/12</h3>
          </div>
        </div>
      </NavLink>
  )
}

export default CardCourse