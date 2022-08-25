import React from 'react'
import img from '../../assets/pict/pict1.png';
import { HeartIcon } from "@heroicons/react/outline"


function CardRecomended(props) {
  return (
        <div className='flex justify-between py-2 px-2 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-lg '>
            <div className='flex gap-3 '>
                <div className='w-24 h-20 rounded-lg'>
                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className='flex flex-col gap-2 font-medium place-content-around'>
                    <h6 className='text-md text-black dark:text-white '>{props.title}</h6>
                    <div className='text-xs flex gap-2 items-center'>
                        <div className=''>
                            <p className='py-1 px-3 bg-amber-300 bg-opacity-50 rounded-sm'>{props.tag}</p>
                        </div>
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
            <div className='px-1 py-1 '>
                <HeartIcon className="bg-pink-200 dark:bg-slate-700 rounded-md px-1 py-1 h-8 w-8 text-pink-600" />
            </div>
        </div>
  )
}

export default CardRecomended