import React, { useState} from 'react'
import SidebarSetting from '../../component/navbar/sidebarSetting'
import {Route, Routes, Navigate} from 'react-router-dom'
import Personal from './personal'
import Appearance from './appearance'
import Billing from './billing'

function Settings() {


  const [openSettings, setOpenSettings] = useState(false);

  const OpenSet = () => {
    setOpenSettings(true);
  }

  const CloseSet = () => {
    setOpenSettings(false);
  }


  return (
    <div className='w-full relative md:block flex overflow-x-hidden'>
      <div className={`md:w-[300px] w-full md:fixed md:h-[calc(100%_-_72px)] bg-whitegray md:min-w-0 min-w-full transition-all duration-300 ease-out ${openSettings ? "md:-translate-x-0 -translate-x-full"  :  "translate-x-0" }`}>
        <SidebarSetting setOpenSet={OpenSet} />
      </div>
      <div className='w-full md:flex md:justify-end md:min-w-0 min-w-full'>
        <div className={`md:w-[calc(100%_-_300px)] w-full px-4 transition-all duration-300 ease-out ${openSettings ?  "md:-translate-x-0 -translate-x-full" : "-translate-x-0" } `}>
          {/* <Personal /> */}
          <Routes>
            <Route
                path='/personal-informations'
                element={<Personal setCloseSet={CloseSet} />}
                />
            <Route
              path='/appearance'
              element={<Appearance setCloseSet={CloseSet} />}
              />
            <Route
              path='/billing-informations'
              element={<Billing setCloseSet={CloseSet} />}
              />
            {/* <Route
              path='/omni-course/settings'
              element={<Navigate replace to='/omni-course/settings/personal-informations' />} /> */}
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default Settings