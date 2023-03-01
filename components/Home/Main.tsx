import React from 'react'
import { Mint } from './Mint'
import { SectionOne } from './SectionOne'

function Main() {
  return (
    <div>



<div className='flex flex-col md:flex-row gap-5 items-center max-w-7xl m-auto h-[90vh] border-b'>

<SectionOne/>
<Mint/>

</div>

    </div>
  )
}

export default Main