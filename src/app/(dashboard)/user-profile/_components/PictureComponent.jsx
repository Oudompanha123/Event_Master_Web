import React from 'react'
import Image from 'next/image'

function PictureComponent() {
  return (
    <>
        <div className='w-[70%] h-auto absolute bottom-0 left-0 rounded-xl'>
            <Image src="/images/Group 1000005619.png" width={80} height={80} className='object-cover w-full h-full rounded-xl'/>
        </div>
    </>
  )
}

export default PictureComponent