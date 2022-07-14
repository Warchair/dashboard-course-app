import React from 'react'
import { NavLink } from 'react-router-dom'

function CardCourse(props) {
  return (
        <NavLink className="px-3 py-3 bg-white rounded-xl w-72" to={`./${props.id}`}>
        <div className='rounded-xl relative h-36 w-64'>
          <img className='rounded-xl w-full h-full object-cover' src={props.image} alt={props.title} />
          <div className='absolute bottom-2 left-2 flex gap-2 items-center text-sm px-2 py-1 rounded-full bg-white'>
            <p className='text-xs'>{props.level}</p>
            <img src={props.icons} alt="" />
          </div>
        </div>
        <div className='mt-3 flex flex-col gap-4'>
          <h3 className='text-md font-semibold text-gray-900'>{props.title}</h3>
          <div className='flex gap-3 items-center'>
              <div className='h-5 w-5 rounded-full bg-blue-100 flex justify-center items-center'>
                  <img src={props.avatar} alt="" className='w-4 h-4' />
              </div>
              <p className='font-medium text-xs text-gray-400'>{props.person}</p>
          </div>
          <div className="class flex justify-evenly item-center gap-3">
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className='text-xs'>24</p>
            </div>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className='text-xs'>9</p>
            </div>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className='text-xs'>30</p>
            </div>
          </div>
          <div className='w-full h-2 bg-gray-100 rounded-lg'>
            <div className='w-1/4 h-full bg-gray-900 rounded-lg'></div>
          </div>
          <div className='text-xs flex justify-between text-gray-500'>
            <h3>Complated : {props.percent}%</h3>
            <h3>Days: 4/12</h3>
          </div>
        </div>
      </NavLink>
  )
}

export default CardCourse