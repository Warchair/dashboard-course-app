import React from 'react'

function CardCompleted(props) {
  return (
    <div>
        <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center font-medium text-sm ">
                <h4 className="text-gray-500 ">{props.title}</h4>
                <h4 className='text-black'>{props.count}/100</h4>
              </div>
              <div className={`w-full h-5 ${props.colorBg}`}>
                <div className={`w-[${props.count}%] h-full ${props.colorFill} rounded-md`}>
                </div>
              </div>
            </div>
    </div>
  )
}

export default CardCompleted