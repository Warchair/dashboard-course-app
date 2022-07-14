import React from 'react'
import img from '../../assets/pict/pict1.png';

function CardRecomended(props) {
  return (
        <div className='flex justify-between py-2 px-2 bg-white rounded-lg '>
            <div className='flex gap-3 '>
                <div className='w-24 h-20 rounded-lg'>
                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className='flex flex-col gap-2 font-medium place-content-around'>
                    <h6 className='text-md text-black '>{props.title}</h6>
                    <div className='text-xs flex gap-2 items-center'>
                        <div className=''>
                            <p className='py-1 px-3 bg-amber-300 bg-opacity-50 rounded-sm'>{props.tag}</p>
                        </div>
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
            <div className='px-1 py-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-pink-200 rounded-md px-1 py-1 h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
        </div>
  )
}

export default CardRecomended