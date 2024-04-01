import React from 'react'

export default function InputBox({label,placeholder,onChange}) {
  return (
    <>
    <div className='text-sm text-blue-400 font-medium text-left py-2'>{label}</div>
    <input onChange={onChange} placeholder={placeholder} className="rounded-md w-full px-2 py-1 border rounded border-slate-200"/>
    </>
  )
}
