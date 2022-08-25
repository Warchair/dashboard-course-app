import React from 'react'

function CardMessage(props) {
  return (
    <div className='flex justify-between items-center py-5 px-4 bg-white dark:bg-slate-800 border-white dark:border-slate-900 hover:border-blue-500 hover:bg-blue-500 dark:text-gray-300 rounded-lg border  cursor-pointer ' onClick={props.setOpenMsg}>
        <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 bg-blue-200 rounded-full'>
                <img src={props.avatar} alt="" />
            </div>
            <div>
                <h1 className='font-medium text-md'>{props.name}</h1>
                <p className=' font-normal text-sm text-gray-600 dark:text-gray-400'>{props.thumbMsg}</p>
            </div>
        </div>
        <div>
            <p className='text-sm font-medium'>{props.time}</p>
        </div>


    </div>
  )
}

export default CardMessage