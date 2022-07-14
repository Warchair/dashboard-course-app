import React from 'react'
import CardCompleted from '../../component/card/cardCompleted'
import CardPlanning from '../../component/card/cardPlanning'
import CardTopTutor from '../../component/card/cardTopTutor'
// import ChartBar from '../charts/barChart'
// import ChartLine from '../charts/lineChart'
// import ChartDougnout from '../charts/pieChart'
import { dataPlanning, dataTop } from '../../component/data/sidebarData'

function Overview() {


  return (
    <div className='grid grid-cols-7 gap-5 md:pl-12 pl-0 py-4 mt-20'>
      <div className='xl:col-span-4 col-span-7 grid gap-5'>
          <div className='bg-white py-5 px-5 rounded-lg '>
              <h3 className='text-lg font-medium black'>Top Tutors</h3>
              <h6 className='text-sm font-normal text-gray-400'>Add they to list</h6>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                {dataTop.map((item) => {
                  return (
                    <CardTopTutor image={item.image} name={item.name} class={item.class} />
                  )
                })}
              </div>
          </div>
        <div>
        </div>
      </div>
      <div className='xl:col-span-3 col-span-7 grid gap-4 '>
        <div className='bg-white  rounded-lg px-4 py-2'>
          <div className='py-4 flex items-center justify-between'>
            <h4 className='font-medium text-lg'>My Planning</h4>
            <select id="cars" className='border border-gray-600 rounded-full p-1 text-sm focus:outline-none'>
              <option value="Week">Week</option>
              <option value="Day">Day</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <div className=' grid grid-col-1 gap-3 py-2'>
            {dataPlanning.map((item) => {
              return (
                <CardPlanning image={item.image} time={item.time} title={item.title} />
              )
            })}
          </div>
        </div>
        <div className='bg-white rounded-lg px-4 py-2'>
          <div className='py-2 flex items-center justify-between'>
            <h4 className='font-medium text-lg'>Complated Courses</h4>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-7 py-4'>
            <CardCompleted title="Java Code" count="75" colorBg="bg-orange-100" colorFill="bg-orange-400" />
            <CardCompleted title="Design Basic" count="65" colorBg="bg-blue-100" colorFill="bg-blue-400" />
            <CardCompleted title="Team Building" count="30" colorBg="bg-indigo-100 " colorFill="bg-indigo-400" />
            <CardCompleted title="Bussines" count="25" colorBg="bg-purple-100 " colorFill="bg-purple-400" />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Overview