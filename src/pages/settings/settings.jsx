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
    <div className='relative flex '>
      <div className={`w-[300px] h-[calc(100vh_-_78px)] sticky top-[78px] bg-whitegray md:min-w-0 min-w-full transition-all duration-300 ease-out ${openSettings  ? "md:-translate-x-0 -translate-x-full"  :  "translate-x-0" }`}>
        <SidebarSetting setOpenSet={OpenSet} />
      </div>
      <div className={`grow md:min-w-0 min-w-full px-4 transition-all duration-300 ease-out ${openSettings ?  "md:-translate-x-0 -translate-x-full" : "-translate-x-0" } `}>
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
          <Route
            path='/'
            element={<Navigate replace to='/omni-course/settings/personal-informations' />} />
        </Routes>
      </div>

    </div>
  )
}

export default Settings