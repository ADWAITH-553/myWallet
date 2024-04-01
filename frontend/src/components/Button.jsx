import React from 'react'

export default function Button({label,onClick}) {
 return (
    <>
    <button onClick={onClick} type="button" className="w-full text-white bg-blue-600 hover:bg-blue-800 rounded-md py-1.5 mb-2">{label}</button>
    </>
  )
}
