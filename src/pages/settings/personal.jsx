import React from 'react'

function Personal(props) {
  return (
    <div className='personal-info py-5 w-full'>
            <div className='flex gap-2 items-center pb-2 border-b border-gray-200'>
                <button className='md:hidden block' onClick={props.setCloseSet} >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <h1 className='md:text-2xl text-xl font-semibold text-black'>Personal Informations</h1>
            </div>
            <div className='mt-5'>
              <h2 className='text-lg font-medium'>Profile</h2>
              <h5 className='mt-2 text-gray-400 text-sm'>This information will be displayed publicly so be careful what you share.</h5>
              <div className='form mt-5 text-sm font-medium'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 '>
                    <div className='flex flex-col gap-3 '>
                      <label htmlFor="firstname">First Name</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <label htmlFor="lastname">Last Name</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <label htmlFor="email">Email</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-sm mt-3'>
                  <label htmlFor="about">About</label>
                  <textarea name="about" id="" cols="30" rows="5" className='py-2 px-2  focus:outline-none rounded-md'></textarea
                  >
                  <p className='text-xs'>Brief description for your profile. URLs are hyperlinked.</p>
                </div>
              </div>
              <div className='text-sm mt-5 mb-5'>
                <h2 className='text-lg font-medium'>Profile</h2>
                <h5 className='text-sm mt-1 text-gray-400 '>This information will be displayed publicly so be careful what you share.</h5>
                <div className='form mt-5 text-sm font-medium'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 '>
                    <div className='flex flex-col gap-3 '>
                      <label htmlFor="email">Email Address</label>
                      <input type="email"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <label htmlFor="phone">Phone Number</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <label htmlFor="country">Country</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <label htmlFor="language">Language</label>
                      <input type="text"  className='py-2 px-2 focus:outline-none rounded-md'/>
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-sm mt-3'>
                  <label htmlFor="about">About</label>
                  <textarea name="about" id="" cols="30" rows="5" className='py-2 px-2  focus:outline-none rounded-md'></textarea>
                  <p className='text-xs'>Brief description for your profile. URLs are hyperlinked.</p>
                </div>
              </div>
              </div>
              <hr />
              <div className='flex gap-3 place-content-end my-5'>
                <button className='text-sm px-6 py-2 rounded-lg bg-white text-gray-900'>cancel</button>
                <button className='text-sm px-6 py-2 rounded-lg bg-blue-600 text-white'>save</button>
              </div>
            </div>
        </div>
  )
}

export default Personal