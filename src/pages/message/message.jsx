import React, {useState} from 'react'
import CardMessage from '../../component/card/cardMessage'
import { dataMessage } from '../../component/data/data'
import avatar from '../../assets/avatar/1.png'
import { ArrowNarrowLeftIcon, XIcon, StarIcon, MailIcon, DotsVerticalIcon, LinkIcon , ArrowCircleRightIcon } from "@heroicons/react/solid"


function Message() {

    const [msgOpen, setMsgOpen] = useState(false);
    const OpenMsg = () => {
        setMsgOpen(true);
    }

  return (
    <div>
        <div className='flex relative'>
            <div className={`w-[350px] flex-none md:min-w-0 min-w-full h-[calc(100vh_-_78px)] sticky top-[78px] flex flex-col gap-2 p-4 no-scrollbar overflow-y-scroll transition-all duration-300 ease-out ${msgOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"}`}>
                <input type="text" className='py-3 px-3 text-md w-full rounded-md focus:outline-none dark:bg-slate-800' placeholder='Search...' />
                {dataMessage.map((item, index) => {
                    return (
                        <CardMessage key={index} name={item.name} thumbMsg={item.thumbMsg} time={item.time} avatar={item.avatar} setOpenMsg={OpenMsg} />
                        )
                    })}
            </div>
            <div className={`grow md:min-w-0 min-w-full px-4 transition-all duration-300 ease-out flex flex-col ${msgOpen ? "md:translate-x-0 -translate-x-full" : ""}` }>
                {/* header */}
                <div className="sticky top-[78px] bg-gray-100 dark:bg-slate-900 flex justify-between items-center border-b py-4   border-b-gray-300 dark:border-b-gray-800">
                    <div className="flex items-center gap-4">
                        <button className='md:hidden block' onClick={() => setMsgOpen(false)}>
                            <ArrowNarrowLeftIcon className="h-6 w-6 text-gray-400" />
                        </button>
                        <div className='bg-orange-100 text-orange-700 flex items-center gap-2 py-2 px-4 rounded-md'>
                            <p>Discussion</p>
                            <div>
                                <XIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className='py-2  px-2 flex gap-4 text-gray-400'>
                        <StarIcon className="h-5 w-5" />
                        <MailIcon className="h-5 w-5" />
                        <DotsVerticalIcon className="h-5 w-5" />
                    </div>
                </div>

                {/* body message */}
                <div className='grow dark:text-gray-300'>
                    <div className="warning py-3  px-4">
                        <p className='text-gray-500 dark:text-gray-200 font-medium text-md'>Today, 31 July 2022, 14:30</p>
                        <h3 className='font-semibold text-md mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className='chat my-3 px-4 flex flex-col text-sm'>
                        <div className='flex gap-2'>
                            <div className='w-8 h-8 flex-none bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                            <div className='grow'>
                                <div className='py-2 px-4 bg-indigo-100 dark:bg-slate-800 dark:text-gray-300 text-gray-700 rounded-tr-xl rounded-tl-xl rounded-br-xl'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                </div>
                                <p className='mt-2'>8.00 PM</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 justify-end text-sm'>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-500 dark:bg-blue-900  rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white'>
                                    <p>Freelance design tricks</p>
                                </div>
                                <p className='mt-2 text-right'>8.01 PM</p>
                            </div>
                            <div className='w-8 h-8 bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 text-sm'>
                            <div className='w-8 h-8 flex-none bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                            <div>
                                <div className='flex flex-col gap-2'>
                                    <div className='py-2 px-4 bg-indigo-100 dark:bg-slate-800 dark:text-gray-300 text-gray-700 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl '>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                    </div>
                                    <div className='py-2 px-4 bg-indigo-100 dark:bg-slate-800 dark:text-gray-300 text-gray-700 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl '>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <p className='mt-2'>8.02 PM</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 justify-end text-sm'>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-500 dark:bg-blue-900 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white'>
                                    <p>Freelance design tricks</p>
                                </div>
                                <p className='mt-2 text-right'>8.01 PM</p>
                            </div>
                            <div className='w-8 h-8 bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                        </div>
                    </div>
                </div>

                {/* typing message */}
                <div className='sticky bottom-0 py-2 bg-gray-100 dark:bg-slate-900'>
                    <div className=' py-2 px-2 bg-white dark:bg-slate-800 rounded-full flex'>
                        <input type="text" className='flex-1 md:px-4 px-2 md:py-2 dark:bg-slate-800 md:text-md text-sm rounded-full focus:outline-none' placeholder='Typing your message...' />
                        <div className='flex items-center gap-2 pl-2 text-sm'>
                            <LinkIcon className="md:h-6 md:w-6 h-4 w-4 text-gray-500" />
                            <button className='px-2 py-2 bg-blue-700 text-white rounded-full flex gap-1'>
                                <span className='md:block hidden'>Send</span>
                                <ArrowCircleRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message