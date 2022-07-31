import { data } from 'autoprefixer';
import React from 'react'
import CardCompleted from '../../component/card/cardCompleted'
import CardPlanning from '../../component/card/cardPlanning'
import CardTopTutor from '../../component/card/cardTopTutor'
import ChartBar from '../../component/charts/barChart';
// import ChartBar from '../charts/barChart'
import ChartLine from '../../component/charts/lineChart';
import ChartDoughnut from '../../component/charts/pieChart';
// import ChartDougnout from '../charts/pieChart'
import { dataPlanning, dataTop, dataClassCompleted } from '../../component/data/sidebarData'

function Overview() {


  return (
    <div className='grid grid-cols-7 gap-5 md:pl-12 pl-0 py-4 mt-20'>
      <div className='xl:col-span-4 col-span-7 grid gap-5'>
        <div className='bg-white py-4 px-4 rounded-lg'>
          <div className='py-3 flex flex-row justify-between'>
            <h5 className='font-semibold text-lg'>Activities</h5>
            <select id="cars" className='border border-gray-300 rounded-full p-1 text-sm focus:outline-none'>
              <option value="Week">Week</option>
              <option value="Day">Day</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <ChartLine />
        </div>
        <div className='grid lg:grid-cols-7 grid-cols-1 gap-5'>
          <div className='bg-white py-4 px-4 rounded-lg lg:col-span-4'>
            <div className='py-3 flex flex-row justify-between'>
              <h5 className='font-semibold text-lg'>Statistics</h5>
              <select id="cars" className='border border-gray-300 rounded-full p-1 text-sm focus:outline-none'>
                <option value="Week">Week</option>
                <option value="Day">Day</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
              </select>
            </div>
              <ChartBar />
          </div>
          <div className='bg-white py-4 px-4 rounded-lg lg:col-span-3'>
            <h5 className=' text-center font-semibold text-lg mb-3'>Course Activities</h5>
            <div className='flex justify-center'>
              <div className=' lg:w-10/12 w-full text-center'>
                <ChartDoughnut />
              </div>
            </div>
          </div>
        </div>
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
            <select id="cars" className='border border-gray-300 rounded-full p-1 text-sm focus:outline-none'>
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
            {dataClassCompleted.map((item) => {
              return (
                <CardCompleted title={item.title} count={item.count} colorBg={item.colorBg} colorFill={item.colorFill} />
              )
            })}
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Overview