import React from 'react'
import SidebarSetting from '../../component/navbar/sidebarSetting'

function Settings() {

  return (
    <div className='lg:static flex flex-col md:pl-12 lg:pl-0'>
      <SidebarSetting />
      <div className='w-full flex lg:justify-end lg:mt-20 mt-5'>
        <div className='personal-info py-5 z-10 lg:w-[calc(100%_-_22rem)] w-full'>
            <div>
            <h1 className='text-2xl font-semibold text-black mb-5'>Personal Informations</h1>
            <hr />
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
        </div>
    </div>
  )
}

export default Settings