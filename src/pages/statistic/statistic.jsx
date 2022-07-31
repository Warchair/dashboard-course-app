import React from 'react'
import CardActivity from '../../component/card/cardActivity'
import ChartBar from '../../component/charts/barChart'
import ChartBar2 from '../../component/charts/barChart2'
import ChartLine from '../../component/charts/lineChart'
import ChartLine2 from '../../component/charts/lineChart2'
import { dataCourseActivity } from '../../component/data/chartData'

function Statistic() {
  return (
    <div className='md:pl-12 pl-0 mt-20 mb-5'>
      <div className='statistic'>
        <h3 className='text-2xl font-semibold my-3'>Statistics</h3>
        <div className="grid gap-5">
          <div className='bg-white rounded-lg px-4 py-4'>
            <div className='flex justify-between font-medium '>
              <h4 className='text-lg'>Course Activity</h4>
              <div className='flex gap-3 items-center'>
                <h4 className='text-sm'>Sort By</h4>
                <select id="cars" className='px-1 py-2 rounded-sm text-sm focus:outline-none bg-gray-100'>
                  <option value="All">All</option>
                  <option value="Day">Day</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
            </div>
            <div className="py-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {dataCourseActivity.map((item, index) => {
                return (
                  <CardActivity key={index} title={item.title} type={item.type} avatar={item.avatar} data={item.data} />
                )
              })}
            </div>
          </div>
          <div>

          <div className='grid grid-cols-8 gap-5'>
              <div className='px-4 py-4 bg-white rounded-md lg:col-span-5 col-span-8 '>
                <div className='flex justify-between items-center mb-3'>
                  <h4 className='font-medium text-lg'>Learning Ponts</h4>
                  <select id="cars" className='px-1 py-2 border border-gray-200 rounded-full text-sm focus:outline-none bg-white'>
                    <option value="Day">Day</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                  </select>
                </div>
                <ChartLine2 />
              </div>
              <div className='px-4 py-4 bg-white rounded-md lg:col-span-3 col-span-8'>
                <h4 className='font-medium text-lg mb-3'>Learning Ponts</h4>
                <ChartBar2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic