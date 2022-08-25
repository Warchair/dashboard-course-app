import React from 'react'
import { DotsVerticalIcon } from "@heroicons/react/outline"


function CardPlanning(props) {
  return (
    <div>
        <div className='flex items-center gap-4 justify-between px-3 py-3 rounded-lg drop-shadow-md bg-white dark:bg-slate-700 w-full '>
        <div className='flex items-center gap-4 '>
          <div>
            <img className=' h-16 w-16 rounded-xl' src={props.image} alt="" />
          </div>
          <div>
            <h4 className='font-medium text-md'>{props.title}</h4>
            <h6 className='font-normal text-sm text-gray-400'>{props.time}</h6>
          </div>
        </div>
        <div>
            <DotsVerticalIcon className='h-6 w-6' />
        </div>
      </div>
    </div>
  )
}

export default CardPlanning