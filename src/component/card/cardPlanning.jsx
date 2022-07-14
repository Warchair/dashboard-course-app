import React from 'react'

function CardPlanning(props) {
  return (
    <div>
        <div className='flex items-center gap-4 justify-between px-3 py-3 rounded-lg drop-shadow-md bg-white w-full z-10'>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </div>
      </div>
    </div>
  )
}

export default CardPlanning