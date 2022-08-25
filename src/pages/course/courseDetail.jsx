import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { dataCourse } from '../../component/data/data';
import CardRecomended from '../../component/card/cardRecomended';
import CardContent from '../../component/card/cardContent';
import { PlayIcon} from "@heroicons/react/outline"


function CourseDetail() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const datacourse = dataCourse.find(item => item.id === id ? item : {});
        setData(datacourse);
    }, []);

    console.log(data);

  return (
        <div className='p-4 dark:text-gray-300'>
            <h3 className='text-2xl font-semibold dark:text-white'>Course</h3>
            <div className='grid grid-cols-7 gap-5 mt-3'>
                <div className='lg:col-span-4 col-span-7 mt-3'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h1 className='text-xl font-medium black mb-5'>{data.title}</h1>
                            <div className='relative'>
                                    <img src={data.image} className="w-full rounded-lg" alt="" />
                                <div className='absolute right-[calc(50%_-_2rem)] bottom-[calc(50%_-_2rem)]'>
                                    <PlayIcon className="h-16 w-16 text-gray-600 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 font-medium sm:overflow-x-hidden overflow-x-scroll text-md border-b-2 dark:border-b-slate-800'>
                            <div className='h-full flex-none py-2 border-blue-600 border-b-2 z-10 w-20 text-center'>
                                <a href="#" className='px-2  text-gray-900 dark:text-white'>About</a>
                            </div>
                            <div className='h-full flex-none py-2 hover:border-blue-600 hover:border-b-2 z-10 w-20 text-center'>
                                <a href="#" className='px-2  hover:text-gray-900 dark:hover:text-white text-gray-500 '>Details</a>
                            </div>
                            <div className='h-full flex-none py-2 hover:border-blue-600 hover:border-b-2 z-10 w-20 text-center'>
                                <a href="#" className='  px-2  hover:text-gray-900 dark:hover:text-white text-gray-500'>Review</a>
                            </div>
                            <div className='h-full flex-none py-2 hover:border-blue-600 hover:border-b-2 z-10 w-24 text-center'>
                                <a href="#" className=' px-2  hover:text-gray-900 dark:hover:text-white text-gray-500 '>Resource</a>
                            </div>
                        </div>
                        <div>
                            <div className='font-medium md:flex-row flex-col flex md:justify-between md:items-center' >
                                <h3 className='text-md'>About this course</h3>
                                <div className='flex gap-2 items-center md:text-sm text-xs'>
                                    <h6 className='text-green-500'>80 Point Requirement</h6>
                                    <div className='flex gap-2 py-2 px-2 items-center'>
                                        <img src={data.icons} alt="" className='w-4 h-4' />
                                        <p>{data.level}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 mt-3 sm:text-md text-sm'>
                                <p>In this online 3d illustraion design short cource, you’ll learn how to create realistic
                                props, characters and entironment using Learn 3D Animation online at your own pace. 
                                Start today and improve your skills. Join millions of learners from around the world
                                already learning on Udemy. Expert Instructors. Lifetime</p>
                                <p>Characters and entironment using Learn 3D Animation online at your own pace. 
                                Start today and improve your skills.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-3 col-span-7 grid gap-5 pb-5 mt-3'>
                    <div className='course-content'>
                        <h1 className=' text-xl font-medium black mb-5'>Course Content</h1>
                        <div className='flex flex-col gap-3 text-medium black'>
                            <CardContent title="What is Content" minute="00:45" />
                            <CardContent title="What is Content" minute="00:45" />
                            <CardContent title="What is Content" minute="00:45" />
                            <CardContent title="What is Content" minute="00:45" />
                            <CardContent title="What is Content" minute="00:45" />
                        </div>
                    </div>
                    <div className="recomended">
                        <h1 className='my-5 text-xl font-medium black'>Student Also Bought</h1>
                        <div className='flex flex-col gap-4'>
                            <CardRecomended title="Completed Web Design" tag="Bestseller" price="$20.30" />
                            <CardRecomended title="Figma UI/UX Esential" tag="Bestseller" price="$23.00" />
                            <CardRecomended title="Completed Web Design" tag="Bestseller" price="$20.30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CourseDetail