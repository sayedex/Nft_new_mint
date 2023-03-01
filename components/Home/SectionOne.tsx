import React from 'react'
import Image from 'next/image'
import secImg from "../../public/IMG/section.png"
export function SectionOne() {
  return (
    <div className='w-full md:w-6/12'>
<img className='p-5 w-full md:max-w-[500px] rounded-[40px]' src={secImg.src} alt="img"/>


    </div>
  )
}

