import React from 'react'

function CardTopTutor(props) {
  return (
    <div>
        <div className="flex justify-between items-center py-6 px-6 drop-shadow-md bg-white rounded-lg  z-10">
        <div className="flex items-center gap-4">
          <div className='h-10 w-10 bg-blue-200 flex justify-center items-center rounded-full'>
              <img src={props.image} className="w-8 h-8" alt="" />
          </div>
          <div className='flex- flex-col gap-3'>
              <h3 className='text-lg font-medium black'>{props.name}</h3>
              <h5 className='text-sm font-normal text-gray-400'>{props.class}</h5>
          </div>
        </div>
        <div className='h-8 w-8 rounded-full bg-blue-100 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CardTopTutor