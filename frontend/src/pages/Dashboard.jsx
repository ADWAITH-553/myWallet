import React from 'react'
import Apppbar from '../components/Apppbar'
import Balance from '../components/Balance'

export default function Dashboard() {
  return (
    <>
    <div>
        <Apppbar/>
        <div className='m-8'></div>
        <Balance value={1000}/>
        <hr className='pt-7'/>
    </div>
    </>
  )
}
