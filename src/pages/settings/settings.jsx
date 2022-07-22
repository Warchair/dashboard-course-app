import React from 'react'
import SidebarSetting from '../../component/navbar/sidebarSetting'
import {Route, Routes, Navigate} from 'react-router-dom'
import Personal from './personal'
import Appearance from './appearance'
import Billing from './billing'

function Settings() {

  return (
    <div className='lg:static flex flex-col md:pl-12 lg:pl-0'>
      <SidebarSetting />
      <div className='w-full flex lg:justify-end lg:mt-20 mt-5'>
        {/* <Personal /> */}
        <Routes>
          <Route
              path='/personal-informations'
              element={<Personal />}
              />
          <Route
            path='/appearance'
            element={<Appearance />}
            />
          <Route
            path='/billing-informations'
            element={<Billing />}
            />
          {/* <Route
					  path='/omni-course/settings'
					  element={<Navigate replace to='/omni-course/settings/personal-informations' />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default Settings