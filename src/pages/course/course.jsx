import React from 'react'
import { NavLink } from 'react-router-dom'
import CardCourse from '../../component/card/cardCourse';
import { dataCourse, dataListing } from '../../component/data/data';
import TableCourses from '../../component/tables/tablesCourse';

function Course() {

  return (
    <div className='p-4'>
        <div className='course'>
          <h3 className='text-2xl dark:text-white font-semibold my-3'>Course</h3>
          <div className='flex gap-5 mt-5'>
            <a href="#" className='border-b-2 font-medium text-black dark:text-white border-blue-500'>All</a>
            <a href="#" className='hover:border-b-2 font-medium text-gray-400 hover:text-black border-blue-400'>Active</a>
            <a href="#" className='hover:border-b-2 font-medium text-gray-400 hover:text-black border-blue-400'>Completed</a>
          </div>
          <div className='flex flex-nowrap overflow-x-auto gap-5 my-5'>
              {dataCourse.map((item) => {
                return <CardCourse id={item.id} image={item.image} level={item.level} title={item.title} person={item.person} avatar={item.avatar} percent={item.persentase} icons={item.icons} />
              })}
          </div>
        </div>
        <div className="course-listing py-5">
          <h3 className='text-lg dark:text-white font-semibold pb-5'>Course Listing</h3>
          <div className='relative overflow-x-auto shadow-md  bg-white dark:bg-slate-800 rounded-lg py-4 px-4'>
            <table className='w-full text-sm text-left text-gray-900 dark:text-gray-400'>
              <thead className='text-sm text-black capitalize bg-white dark:bg-slate-800 dark:text-gray-100'>
                <tr className='border-b'>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Category</th>
                  <th scope="col" class="px-6 py-3">Level</th>
                  <th scope="col" class="px-6 py-3">Tools</th>
                  <th scope="col" class="px-6 py-3">Lessons</th>
                  <th scope="col" class="px-6 py-3">Point Required</th>
                </tr>
              </thead>
              <tbody >
                {dataListing.map((item) => {
                  return <TableCourses category={item.category} icons={item.icons} lesson={item.lesson} level={item.level} name={item.name} point={item.point} tools={item.tools}  />
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Course