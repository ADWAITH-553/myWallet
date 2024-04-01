import React from 'react'

export default function Users() {
  return (
    <>
    <div className='pl-14 pt-20 font-bold text-2xl'>Users</div>
    <div className="my-2 mx-14 flex">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 ml-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
        </div>
    </>
  )
}
