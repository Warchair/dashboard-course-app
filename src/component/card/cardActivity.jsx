import React from 'react'
import ChartDoughnut2 from '../charts/pieChart2'

function CardActivity(props) {
  return (
    <div className='border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-700 rounded-md px-4 py-4'>
        <div className='flex gap-3 items-center mb-5'>
            <div className='w-14 h-14 bg-teal-200 rounded-full'>
                <img src={props.avatar} className="w-14 h-14 rounded-full" alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='font-medium text-md'>{props.title}</h5>
                <h5 className='font-normal text-sm text-gray-400'>{props.type}</h5>
            </div>
        </div>
            <ChartDoughnut2 data={props.data} />
    </div>
  )
}

export default CardActivity