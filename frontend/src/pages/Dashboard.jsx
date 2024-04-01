import React from 'react'
import Apppbar from '../components/Apppbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

export default function Dashboard() {
  return (
    <>
    <div>
        <Apppbar/>
        <div className='m-8'></div>
        <Balance value={1000}/>
        <Users/>
    </div>
    </>
  )
}
