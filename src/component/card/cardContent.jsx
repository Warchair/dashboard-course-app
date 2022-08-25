import React from 'react'

function CardContent(props) {
  return (
    <div className='py-4 px-4 rounded-lg bg-white dark:bg-slate-800 flex justify-between items-center'>
        <p>{props.title}</p>
        <p>{props.minute}</p>
    </div>
  )
}

export default CardContent