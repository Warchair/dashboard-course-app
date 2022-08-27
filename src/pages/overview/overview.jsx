import React from 'react'
import CardCompleted from '../../component/card/cardCompleted'
import CardPlanning from '../../component/card/cardPlanning'
import CardTopTutor from '../../component/card/cardTopTutor'
import ChartBar from '../../component/charts/barChart';
import ChartLine from '../../component/charts/lineChart';
import ChartDoughnut from '../../component/charts/pieChart';
import { dataPlanning, dataTop, dataClassCompleted } from '../../component/data/data'
import DropdownList from '../../component/dropdown/dropdownList';
import { DotsHorizontalIcon } from "@heroicons/react/outline"



function Overview() {
  return (
    <div className='grid grid-cols-7 gap-5 p-4'>
      <div className='xl:col-span-4 col-span-7 grid gap-5'>
        <div className='bg-white dark:bg-slate-800 dark:text-gray-300 py-4 px-4 rounded-lg'>
          <div className='py-3 flex flex-row justify-between items-center'>
            <h5 className='font-semibold text-lg dark:text-white'>Activities</h5>
            <DropdownList />
          </div>
          <ChartLine />
        </div>
        <div className='grid grid-cols-7 gap-5'>
          <div className='bg-white dark:bg-slate-800 dark:text-gray-300 py-4 px-4 rounded-lg md:col-span-4 col-span-7'>
            <div className='py-3 flex flex-row justify-between items-center'>
              <h5 className='font-semibold text-lg'>Statistics</h5>
              <DropdownList />
            </div>
              <ChartBar />
          </div>
          <div className='bg-white dark:bg-slate-800 dark:text-gray-300 py-4 px-4 rounded-lg md:col-span-3 col-span-7'>
            <h5 className=' text-center font-semibold text-lg mb-3'>Course Activities</h5>
            <div className='flex justify-center'>
              <div className=' lg:w-10/12 w-full text-center'>
                <ChartDoughnut />
              </div>
            </div>
          </div>
        </div>
          <div className='bg-white dark:bg-slate-800 dark:text-gray-300 py-5 px-5 rounded-lg '>
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
        <div className='bg-white dark:bg-slate-800 dark:text-gray-300 rounded-lg px-4 py-2'>
          <div className='py-4 flex justify-between items-center relative'>
            <h4 className='font-medium text-lg'>My Planning</h4>
            <DropdownList />
          </div>
          <div className='grid grid-col-1 gap-3 py-2'>
            {dataPlanning.map((item) => {
              return (
                <CardPlanning image={item.image} time={item.time} title={item.title} />
              )
            })}
          </div>
        </div>
        <div className='bg-white dark:bg-slate-800 dark:text-gray-300 rounded-lg px-4 py-2'>
          <div className='py-2 flex items-center justify-between'>
            <h4 className='font-medium text-lg'>Complated Courses</h4>
            <div>
              <DotsHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
          <div className='flex flex-col gap-7 py-4'>
            {dataClassCompleted.map((item) => {
              return (
                <CardCompleted title={item.title} count={item.count} colorBg={item.colorBg} colorFill={item.colorFill} percentage={item.percentage} />
              )
            })}
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Overview