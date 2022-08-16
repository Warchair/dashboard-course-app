import React from 'react'

function CardMessage(props) {
  return (
    <div className='flex justify-between items-center py-5 px-4 bg-white rounded-lg border border-white hover:border-blue-500 hover:bg-blue-50 cursor-pointer' onClick={props.setOpenMsg}>
        <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 bg-blue-200 rounded-full'>
                <img src={props.avatar} alt="" />
            </div>
            <div>
                <h1 className='font-medium text-md'>{props.name}</h1>
                <p className=' font-normal text-sm text-gray-600'>{props.thumbMsg}</p>
            </div>
        </div>
        <div>
            <p className='text-sm font-medium'>{props.time}</p>
        </div>


    </div>
  )
}

export default CardMessage