import { NavbarComponent } from '@/components/NavbarComponent'
import { SidebarComponent } from '@/components/SidebarComponent'
import React from 'react'

function page() {
  return (
    <div className='flex justify-between w-full'>
        <div className='w-[310px] h-[1117px]'>
            <SidebarComponent/>
        </div>
        <div className='w-[1413px]'>
            <NavbarComponent/>
            <div className='w-full h- bg-slate-600'>

            </div>
        </div>
    </div>
  )
}

export default page