import React from 'react'
import mclogo from '../../assets/icons/mastercardlogo.svg';
import visalogo from '../../assets/icons/visalogo.svg';
import { ArrowNarrowLeftIcon} from "@heroicons/react/solid"
import { MinusCircleIcon, PlusSmIcon} from "@heroicons/react/outline"


function Billing(props) {
  return (
    <div className='appearance-info py-5 w-full h-full'>
      <div>
        <div className='flex gap-2 items-center pb-2 border-b border-gray-200'>
          <button className='md:hidden block' onClick={props.setCloseSet}>
            <ArrowNarrowLeftIcon className="h-6 w-6 text-gray-400" />
          </button>
          <h1 className='md:text-2xl text-xl font-semibold text-black dark:text-white'>Billing</h1>
        </div>
        <h6 className='text-sm font-normal text-gray-500 mt-3'>Set up your billing Informations for your payment and subscription</h6>
        <div className='my-5'>
          <h6 className='text-md font-medium text-gray-900 dark:text-gray-100'>Plan</h6>
          <div className='grid lg:grid-cols-2 grid-flow-row gap-5 my-3'>
            <div className='border-2 border-blue-600 cursor-pointer hover:bg-blue-300/20 rounded-md py-2 px-4 relative'>
              <div className='absolute -top-4 -right-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="blue" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className='flex justify-between mb-3'>
                <div>
                  <h5 className='text-lg font-medium text-gray-800 dark:text-gray-200'>Beginner</h5>
                  <h5 className='text-sm font-normal text-gray-400'>36 Days remaining</h5>
                </div>
                <div>
                  <h5 className='text-lg font-medium text-black dark:text-gray-200'>$10/<span className='text-gray-400'>month</span></h5>
                </div>
              </div>
              <button className='text-sm py-2 px-4 rounded-md border-blue-600 border my-2 text-blue-600'>
                <h6>Buy this class</h6>
              </button>
            </div>
            <div className='border-2 border-gray-400 hover:border-blue-500 cursor-pointer hover:bg-blue-300/20 rounded-md py-2 px-4'>
              <div className='flex justify-between mb-3'>
                <div>
                  <h5 className='text-lg font-medium text-gray-800 dark:text-gray-200'>Beginner</h5>
                  <h5 className='text-sm font-normal text-gray-400'>36 Days remaining</h5>
                </div>
                <div>
                  <h5 className='text-lg font-medium text-black dark:text-gray-200'>$10/<span className='text-gray-400'>month</span></h5>
                </div>
              </div>
              <button className='text-sm py-2 px-4 rounded-md border-blue-600 border my-2 text-blue-600'>
                <h6>Buy this class</h6>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <h6 className='text-md font-medium text-gray-900 dark:text-gray-100'>Payment Method</h6>
          <div className='grid gap-3 my-3 lg:grid-cols-paymentcard grid-flow-row'>
              <div className='py-2 px-4 rounded-md border-2 hover:bg-blue-300/20 border-gray-300 dark:border-gray-700 group hover:border-blue-500 flex flex-col gap-3 cursor-pointer'>
                <h6 className='text-sm font-medium'>Credit Card</h6>
                <div className='flex gap-2 items-center'>
                  <div className=' py-0.5 px-1 rounded-sm border border-gray-300 dark:border-gray-600'>
                    <img src={mclogo} className="h-4" alt="" />
                  </div>
                  <p className='text-sm font-medium'>**** **** ***2345</p>
                </div>
                <div className=" place-self-end">
                  <MinusCircleIcon className="h-5 w-5 text-gray-300 group-hover:text-blue-500" />
                </div>
              </div>
              <div className='py-2 px-4 rounded-md border-2 hover:bg-blue-300/20 border-gray-300 dark:border-gray-700 group cursor-pointer hover:border-blue-500 flex flex-col gap-3'>
                <h6 className='text-sm font-medium'>Debit Card</h6>
                <div className='flex gap-2 items-center'>
                  <div className=' py-0.5 px-1 rounded-sm border border-gray-300 dark:border-gray-600'>
                    <img src={visalogo} className="h-4" alt="" />
                  </div>
                  <p className='text-sm font-medium'>**** **** ***2345</p>
                </div>
                <div className=" place-self-end ">
                  <MinusCircleIcon className="h-5 w-5 text-gray-300 group-hover:text-blue-500" />
                </div>
              </div>
              <div className='py-2 px-4 rounded-md border-2 hover:bg-blue-300/20 border-gray-300 dark:border-gray-700 hover:border-blue-500 flex justify-center items-center gap-3 cursor-pointer group'>
                <div className='h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center  group-hover:text-blue-500 dark:text-gray-600 dark:bg-slate-800'>
                    <PlusSmIcon className="h-6 w-6  " />
                </div>
              </div>
          </div>
        </div>
        <div className='mt-10'>
          <h6 className='text-md font-medium text-gray-900 dark:text-gray-100'>Billing History</h6>
          <div className='overflow-x-auto relative'>
          <table className='w-full text-sm text-left text-gray-900 dark:text-gray-300 mt-5 '>
              <thead className='text-sm text-black capitalize bg-gray-50 dark:bg-slate-700 dark:text-gray-300'>
                <tr className='border-b uppercase font-medium'>
                  <th scope="col" class="px-6 py-3">Date</th>
                  <th scope="col" class="px-6 py-3">Details</th>
                  <th scope="col" class="px-6 py-3">Amount</th>
                  <th scope="col" class="px-6 py-3">Downloads</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-slate-800 ">
                  <td scope="row" class="px-6 py-4 ">08/07/2021</td>
                  <td scope="row" class="px-6 py-4 ">Beginner UI Design</td>
                  <td scope="row" class="px-6 py-4 ">$10.00</td>
                  <td scope="row" class="px-6 py-4 ">Invoice 08 July 2021</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800 ">
                  <td scope="row" class="px-6 py-4 ">08/07/2021</td>
                  <td scope="row" class="px-6 py-4 ">Beginner UI Design</td>
                  <td scope="row" class="px-6 py-4 ">$10.00</td>
                  <td scope="row" class="px-6 py-4 ">Invoice 08 July 2021</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800 ">
                  <td scope="row" class="px-6 py-4 ">08/07/2021</td>
                  <td scope="row" class="px-6 py-4 ">Beginner UI Design</td>
                  <td scope="row" class="px-6 py-4 ">$10.00</td>
                  <td scope="row" class="px-6 py-4 ">Invoice 08 July 2021</td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Billing