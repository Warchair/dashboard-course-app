import React, {useState} from 'react'
import CardMessage from '../../component/card/cardMessage'
import { dataMessage } from '../../component/data/sidebarData'
import avatar from '../../assets/avatar/1.png'

function Message() {

    const [msgOpen, setMsgOpen] = useState(false);
    const OpenMsg = () => {
        setMsgOpen(true);
    }
    // console.log(msgOpen);

  return (
    <div>
        <div className='flex relative'>
            <div className={`w-[350px] flex-none md:min-w-0 min-w-full h-[calc(100vh_-_72px)] sticky top-[72px] flex flex-col gap-2 p-4 no-scrollbar overflow-y-scroll transition-all duration-300 ease-out ${msgOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"}`}>
                <input type="text" className='py-3 px-3 text-md w-full rounded-md focus:outline-none' placeholder='Search...' />
                {dataMessage.map((item, index) => {
                    return (
                        <CardMessage key={index} name={item.name} thumbMsg={item.thumbMsg} time={item.time} avatar={item.avatar} setOpenMsg={OpenMsg} />
                        )
                    })}
            </div>
            <div className={`grow md:min-w-0 min-w-full px-4 transition-all duration-300 ease-out flex flex-col ${msgOpen ? "md:translate-x-0 -translate-x-full" : ""}` }>
                {/* header */}
                <div className="sticky top-[72px] bg-gray-100 flex justify-between items-center border-b py-4   border-b-gray-300">
                    <div className="flex items-center gap-4">
                        <button className='md:hidden block' onClick={() => setMsgOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <div className='bg-orange-100 text-orange-700 flex items-center gap-2 py-2 px-4 rounded-md'>
                            <p>Discussion</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='py-2  px-2 flex gap-4 text-gray-400'>
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

                {/* body message */}
                <div className='grow'>
                    <div className="warning py-3  px-4">
                        <p className='text-gray-500 font-medium text-md'>Today, 31 July 2022, 14:30</p>
                        <h3 className='font-semibold text-md mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className='chat my-3 px-4 flex flex-col text-sm'>
                        <div className='flex gap-2'>
                            <div className='w-8 h-8 flex-none bg-blue-200 rounded-full'>
                                <img src={avatar} alt=""  />
                            </div>
                            <div className='grow'>
                                <div className='py-2 px-4 bg-indigo-100 rounded-tr-xl rounded-tl-xl rounded-br-xl text-gray-700'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                </div>
                                <p className='mt-2'>8.00 PM</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 justify-end text-sm'>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-500  rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white'>
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
                                    <div className='py-2 px-4 bg-indigo-100 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-700'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam incidunt, sequi, omnis porro </p>
                                    </div>
                                    <div className='py-2 px-4 bg-indigo-100 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-700'>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <p className='mt-2'>8.02 PM</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-4 justify-end text-sm'>
                            <div className='max-w-md'>
                                <div className='py-2 px-4 bg-indigo-500  rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white'>
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
                <div className='sticky bottom-0 py-2 bg-gray-100'>
                    <div className=' py-2 px-2 bg-white rounded-full flex'>
                        <input type="text" className='flex-1 md:px-4 px-2 md:py-2  md:text-md text-sm rounded-full focus:outline-none' placeholder='Typing your message...' />
                        <div className='flex items-center gap-2 pl-2 text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-6 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <button className='px-2 py-2 bg-blue-700 text-white rounded-full flex gap-1'>
                                <span className='md:block hidden'>Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>    
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