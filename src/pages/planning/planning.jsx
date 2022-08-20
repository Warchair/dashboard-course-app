import React, {useState} from 'react'
// import Calendar from 'react-calendar'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';



function Planning() {

    const days = [
        "Mon", "Tue","Wed","Thur","Fri","Sat","Sun"
    ]

    const [openDetails, setOpenDetails] = useState(false);

    const openClick = () => {
        setOpenDetails(true);
    }

  return (
    <div className=''>
        <div className='relative flex'>
            <div className={`grow h-[calc(100vh_-_72px)] sticky top-[72px] md:min-w-0 min-w-full bg-whitegray md:p-8 p-4 overflow-x-hidden overflow-y-scroll transition-all duration-300 ease-out no-scrollbar ${openDetails ? "md:translate-x-0 -translate-x-full" : "translate-x-0"}`}>
                <h4 className='font-semibold text-lg'>August 10, 2020</h4>
                <div className='py-4 flex gap-2 md:overflow-x-hidden overflow-x-scroll'>
                    {days.map((item, index) => {
                        return (
                            <div key={index} className='font-normal text-md text-center py-6 w-[70px] flex-none rounded-3xl border border-gray-300 hover:bg-blue-400 hover:border-blue-400 hover:text-white group cursor-pointer'>
                                <p className='text-gray-400 group-hover:text-gray-100'>{item}</p>
                                <p className='font-medium'>1{index}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-between py-4'>
                    <h3 className='font-semibold '>Upcoming Appointments</h3>
                    <a href="#" className='text-blue-400'>View All</a>
                </div>
                <div className='py-4'>
                    <div className='grid grid-cols-[70px,repeat(1,1fr)] grid-rows-[70px,repeat(9,70px)]'>
                        <div class="row-start-[1] col-start-[1] text-left text-xs -mt-2 text-gray-400">8 AM</div>
                        <div class="row-start-[1] col-start-[2] border-t  border-t-gray-300"></div>
                        <div class="row-start-[2] col-start-[1] text-left text-xs -mt-2  text-gray-400">9 AM</div>
                        <div class="row-start-[2] col-start-[2] border-t border-dashed border-t-gray-300"></div>
                        <div class="row-start-[3] col-start-[1] text-left text-xs -mt-2 text-gray-400">10 AM</div>
                        <div class="row-start-[3] col-start-[2] border-t  border-t-gray-300"></div>
                        <div class="row-start-[4] col-start-[1] text-left text-xs -mt-2  text-gray-400">11 AM</div>
                        <div class="row-start-[4] col-start-[2] border-t border-dashed border-t-gray-300"></div>
                        <div class="row-start-[5] col-start-[1] text-left text-xs -mt-2 text-gray-400">12 AM</div>
                        <div class="row-start-[5] col-start-[2] border-t  border-t-gray-300"></div>
                        <div class="row-start-[6] col-start-[1] text-left text-xs -mt-2  text-gray-400">1 PM</div>
                        <div class="row-start-[6] col-start-[2] border-t border-dashed border-t-gray-300"></div>
                        <div class="row-start-[7] col-start-[1] text-left text-xs -mt-2 text-gray-400">2 PM</div>
                        <div class="row-start-[7] col-start-[2] border-t  border-t-gray-300"></div>
                        <div class="row-start-[8] col-start-[1] text-left text-xs -mt-2  text-gray-400">3 PM</div>
                        <div class="row-start-[8] col-start-[2] border-t border-dashed border-t-gray-300"></div>
                        <div class="row-start-[9] col-start-[1] text-left text-xs -mt-2 text-gray-400">4 PM</div>
                        <div class="row-start-[9] col-start-[2] border-t  border-t-gray-300"></div>
                        <div class="row-start-[10] col-start-[1] text-left text-xs -mt-2  text-gray-400">5 PM</div>
                        <div class="row-start-[10] col-start-[2] border-t border-dashed border-t-gray-300"></div>
                        <div class="row-start-[1] col-start-2 row-span-2 md:w-3/4 w-full justify-self-end bg-blue-100 rounded-lg p-4 flex items-center gap-4">
                            <div className='w-14 h-14 rounded-xl bg-blue-200 flex justify-center items-center text-gray-400 '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='text-gray-500 flex flex-col gap-2'>
                                <h4 className='font-semibold'>Flutter Course</h4>
                                <p className='text-sm'>Mobile Dev (08.00 AM - 10.00 AM)</p>
                            </div>
                        </div>
                        <div class="row-start-[4] col-start-2 row-span-2 md:w-3/4 w-full justify-self-end bg-indigo-50 rounded-lg p-4 flex items-center gap-4 cursor-pointer" onClick={openClick}>
                            <div className='w-14 h-14 rounded-xl bg-blue-200 flex justify-center items-center text-gray-400 '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='text-gray-500 flex flex-col gap-2'>
                                <h4 className='font-semibold'>React Native Course</h4>
                                <p className='text-sm'>Mobile Dev (11.00 AM - 1.00 PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:min-w-0 min-w-full w-[350px] flex-none'>
                <div className={`gap-4 md:px-8 px-4 py-4 transition-all duration-300 ease-out ${openDetails ? "md:-translate-x-0  -translate-x-full" : "-translate-x-0"}`}>
                    <div className='flex items-center gap-4'>
                        <button className='md:hidden block' onClick={() => setOpenDetails(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <h2 className='text-lg  font-semibold text-gray-700 py-4'>Details</h2>
                    </div>
                    <div className='flex gap-4 items-center px-4 py-4 rounded-xl border border-gray-300'>
                        <div className='w-14 h-14 rounded-xl bg-blue-200 flex justify-center items-center text-gray-400 '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='text-gray-500 flex flex-col gap-2'>
                            <h4 className='font-semibold'>React Native Course</h4>
                            <p className='text-sm'>104 Modules & 25 Videos</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 py-4'>Informations</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 items-center text-gray-700'>
                                <div className='w-10 h-10 rounded-lg bg-blue-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4>11.00 AM - 01.00 PM</h4>
                            </div>
                            <div className='flex gap-4 items-center text-gray-700'>
                                <div className='w-10 h-10 rounded-lg bg-red-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4>Hermantyo Kusumo</h4>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 py-4'>Description</h2>
                        <div className='text-sm flex flex-col gap-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente dolore animi, culpa inventore ea fugiat dolorum odio harum aspernatur, illum at nemo consectetur aliquid!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maiores omnis quis vero iure aliquid distinctio mollitia reiciendis!</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 py-4'>Category</h2>
                        <div className='text-sm flex gap-3'>
                            <div className='py-2 px-4 rounded-full border hover:bg-blue-400 hover:text-white cursor-pointer border-gray-200'>
                                <p>Mobile Dev</p>
                            </div>
                            <div className='py-2 px-4 rounded-full border hover:bg-blue-400 hover:text-white cursor-pointer border-gray-200'>
                                <p>Front End</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='text-md grid grid-cols-2 gap-2 text-center'>
                            <div className='py-4 px-4 rounded-2xl border bg-blue-400 text-white cursor-pointer border-gray-200'>
                                <p>Open Course</p>
                            </div>
                            <div className='py-4 px-4 rounded-2xl border  cursor-pointer border-gray-200'>
                                <p>Cancel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


const calendarManual = (
    <div className=' grid grid-cols-[70px,repeat(7,150px)] grid-rows-[auto,repeat(11,50px)]'>
                    <div class="row-start-[1] col-start-[1] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2">
                    </div>
                    <div class="row-start-[1] col-start-[2] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Sun</p>
                        <p>10</p>
                    </div>
                    <div class="row-start-[1] col-start-[3] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Mon</p>
                        <p>11</p>
                    </div>
                    <div class="row-start-[1] col-start-[4] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Tue</p>
                        <p>12</p>
                    </div>
                    <div class="row-start-[1] col-start-[5] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r  text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Wed</p>
                        <p>13</p>
                    </div>
                    <div class="row-start-[1] col-start-[6] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Thur</p>
                        <p>14</p>
                    </div>
                    <div class="row-start-[1] col-start-[7] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Fri</p>
                        <p>15</p>
                    </div>
                    <div class="row-start-[1] col-start-[8] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b border-r text-sm py-2 text-center font-semibold">
                        <p className='text-gray-500'>Sat</p>
                        <p>16</p>
                    </div>
                    <div class="row-start-[2] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">8 AM</div>
                    <div class="row-start-[2] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">9 AM</div>
                    <div class="row-start-[3] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[3] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">10 AM</div>
                    <div class="row-start-[4] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[4] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">11 AM</div>
                    <div class="row-start-[5] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[5] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">12 PM</div>
                    <div class="row-start-[6] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[6] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">1 PM</div>
                    <div class="row-start-[7] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[7] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">2 PM</div>
                    <div class="row-start-[8] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[8] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">3 PM</div>
                    <div class="row-start-[9] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[9] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">4 PM</div>
                    <div class="row-start-[10] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[10] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium">5 PM</div>
                    <div class="row-start-[11] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[11] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b border-r"></div>
                    <div class="row-start-[2] col-start-3 row-span-4 bg-blue-400/20 dark:bg-sky-600/50 border border-blue-700/10 dark:border-sky-500 rounded-lg m-1 p-1 flex flex-col">
                    </div>
                </div>
)

export default Planning


