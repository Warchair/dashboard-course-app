import React from 'react'
import CardMessage from '../../component/card/cardMessage'
import { dataMessage } from '../../component/data/sidebarData'
import avatar from '../../assets/avatar/1.png'

function message() {
  return (
    <div>
        <div className='md:pl-12 pl-0 mt-24 '>
            {/* <div className='flex justify-between items-center my-2'>
                <div className='flex gap-2 py-2 pl-2 pr-4 rounded-md bg-white font-medium items-center text-blue-600'>
                    <div className='p-2 rounded-sm bg-blue-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    <p>new conversation</p>
                </div>
                <div>
                    <select id="cars" className='rounded-sm py-4 text-sm focus:outline-none'>
                        <option>a-z</option>
                        <option>z-a</option>
                    </select>
                </div>
            </div> */}

            {/* chat */}
            <div className='bg-gray-50 rounded-md'>
            <div className='grid grid-cols-11 gap-4  px-4 py-4 w-full relative'>
                <div className='col-span-4 flex flex-col gap-2 position-sticky top-0 overflow-y-scroll'>
                    {dataMessage.map((item, index) => {
                        return (
                            <CardMessage key={index} name={item.name} thumbMsg={item.thumbMsg} time={item.time} avatar={item.avatar}  />
                            )
                    })}
                </div>
                <div className="col-span-7 bg-gray-50 py-2 px-4">
                    <div className="flex justify-between items-center border-b py-2 border-b-gray-300">
                        <div className='bg-orange-100 text-orange-700 flex items-center gap-2 py-2 px-4 rounded-md'>
                            <p>Discussion</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className='py-2 px-2 flex gap-4 text-gray-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="warning py-3">
                        <p className='text-gray-500 font-medium text-lg'>Today, 31 July 2022, 14:30</p>
                        <h3 className='font-semibold text-xl mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>

                    <div className='chat my-3 flex flex-col'>
                        <div className='flex gap-2 my-4'>
                            <div className='w-8 h-8 bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-50 rounded-tr-xl rounded-tl-xl rounded-br-xl text-gray-700'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                </div>
                                <p className='mt-2'>8.00 PM</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 justify-end'>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-500  rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white'>
                                    <p>Freelance design tricks</p>
                                </div>
                                <p className='mt-2'>8.01 PM</p>
                            </div>
                            <div className='w-8 h-8 bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                        </div>

                        <div className='flex gap-2 my-4'>
                            <div className='w-8 h-8 bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                            <div>
                                <div className='flex flex-col gap-2'>
                                    <div className='py-2 px-4 bg-indigo-50 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-700 max-w-md'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                    </div>
                                    <div className='py-2 px-4 bg-indigo-50 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-700'>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <p className='mt-2'>8.02 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default message