import React, {useState} from 'react'
import { DeviceMobileIcon, ArrowNarrowLeftIcon, UserIcon } from "@heroicons/react/solid"
import { ClockIcon } from "@heroicons/react/outline"


function Planning() {

    const days = [
        "Mon", "Tue","Wed","Thur","Fri","Sat","Sun"
    ]

    const [openDetails, setOpenDetails] = useState(false);

    const openClick = () => {
        setOpenDetails(true);
    }

  return (
        <div className='relative flex'>
            <div className={`grow h-[calc(100vh_-_78px)] sticky top-[78px] md:min-w-0 min-w-full bg-whitegray dark:bg-slate-900 dark:text-gray-300 md:p-8 p-4 overflow-x-hidden overflow-y-scroll transition-all duration-300 ease-out no-scrollbar ${openDetails ? "md:translate-x-0 -translate-x-full" : "translate-x-0"}`}>
                <h4 className='font-semibold dark:text-white text-lg'>August 10, 2020</h4>
                <div className='py-4 flex gap-2 md:overflow-x-hidden overflow-x-scroll'>
                    {days.map((item, index) => {
                        return (
                            <div key={index} className={`font-normal text-md text-center py-6 w-[70px] flex-none rounded-3xl border border-gray-300 dark:border-gray-600 hover:bg-blue-400 dark:hover:bg-blue-600 dark:hover:border-blue-600  hover:text-white group cursor-pointer ${index === 0 ? "dark:bg-blue-600 bg-blue-400 text-gray-100" : ""}`}>
                                <p className={`text-gray-400 group-hover:text-gray-100 ${index === 0 ? 'text-gray-100' : "" }`}>{item}</p>
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
                        <div class="row-start-[1] col-start-2 row-span-2 md:w-3/4 w-full justify-self-end bg-blue-100 dark:bg-slate-800 rounded-lg p-4 flex items-center gap-4">
                            <div className='w-14 h-14 rounded-xl bg-blue-200 dark:bg-slate-900 flex justify-center items-center text-gray-400 dark:text-gray-500'>
                                <DeviceMobileIcon className="h-8 w-8" />
                            </div>
                            <div className='text-gray-500 dark:text-gray-300  flex flex-col gap-2'>
                                <h4 className='font-semibold'>Flutter Course</h4>
                                <p className='text-sm'>Mobile Dev (08.00 AM - 10.00 AM)</p>
                            </div>
                        </div>
                        <div class="row-start-[4] col-start-2 row-span-2 md:w-3/4 w-full justify-self-end bg-indigo-50 dark:bg-slate-800 rounded-lg p-4 flex items-center gap-4 cursor-pointer" onClick={openClick}>
                            <div className='w-14 h-14 rounded-xl bg-blue-200 dark:bg-slate-900 flex justify-center items-center text-gray-400 dark:text-gray-500'>
                                <DeviceMobileIcon className="h-8 w-8" />
                            </div>
                            <div className='text-gray-500 dark:text-gray-300 flex flex-col gap-2'>
                                <h4 className='font-semibold'>React Native Course</h4>
                                <p className='text-sm'>Mobile Dev (11.00 AM - 1.00 PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:min-w-0 min-w-full w-[350px] flex-none text-gray-500 dark:bg-gray-900 dark:text-gray-300'>
                <div className={`gap-4 md:px-8 px-4 py-4 transition-all duration-300 ease-out ${openDetails ? "md:-translate-x-0  -translate-x-full" : "-translate-x-0"}`}>
                    <div className='flex items-center gap-4'>
                        <button className='md:hidden block' onClick={() => setOpenDetails(false)}>
                            <ArrowNarrowLeftIcon className="h-6 w-6 text-gray-400 dark:text-gray-100" />
                        </button>
                        <h2 className='text-lg  font-semibold text-gray-700 dark:text-white py-4'>Details</h2>
                    </div>
                    <div className='flex gap-4 items-center px-4 py-4 rounded-xl border border-gray-300'>
                        <div className='w-14 h-14 rounded-xl bg-blue-200 dark:bg-slate-800 flex justify-center items-center text-gray-400 dark:text-gray-500'>
                            <DeviceMobileIcon className="h-8 w-8" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold'>React Native Course</h4>
                            <p className='text-sm'>104 Modules & 25 Videos</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 dark:text-white py-4'>Informations</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 items-center text-gray-700'>
                                <div className='w-10 h-10 rounded-lg bg-blue-100 dark:bg-slate-800'>
                                    <ClockIcon className="h-10 w-10 p-2 text-blue-500"  />
                                </div>
                                <h4 className='dark:text-gray-300'>11.00 AM - 01.00 PM</h4>
                            </div>
                            <div className='flex gap-4 items-center text-gray-700'>
                                <div className='w-10 h-10 rounded-lg bg-red-100 dark:bg-slate-800'>
                                    <UserIcon className="h-10 w-10 p-2 text-red-500 "  />
                                </div>
                                <h4 className='dark:text-gray-300'>Hermantyo Kusumo</h4>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 dark:text-white py-4'>Description</h2>
                        <div className='text-sm flex flex-col gap-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente dolore animi, culpa inventore ea fugiat dolorum odio harum aspernatur, illum at nemo consectetur aliquid!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maiores omnis quis vero iure aliquid distinctio mollitia reiciendis!</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-md font-semibold text-gray-700 dark:text-white py-4'>Category</h2>
                        <div className='text-sm flex flex-wrap space-x-3 '>
                            <div className='py-2 px-4 rounded-full border hover:bg-blue-400 dark:hover:bg-blue-500 hover:text-white cursor-pointer border-gray-200'>
                                <p>Mobile Dev</p>
                            </div>
                            <div className='py-2 px-4 rounded-full border hover:bg-blue-400 dark:hover:bg-blue-500  hover:text-white cursor-pointer border-gray-200'>
                                <p>Front End</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='text-md grid grid-cols-2 gap-2 text-center'>
                            <div className='py-4 px-4 rounded-2xl border bg-blue-400 dark:bg-blue-600 text-white cursor-pointer border-gray-200 dark:border-slate-900'>
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
  )
}


export default Planning


