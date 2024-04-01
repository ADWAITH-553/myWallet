import React from 'react'

export default function Balance({value}) {
  return (
<>
    <div className='flex'>
        <div className='pl-12 font-bold text-3xl text-blue-800'>Your balance</div>
        <div className='pl-5 font-bold text-3xl'>Rs{value}</div>
    </div>
</>
  )
}
