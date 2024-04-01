import React from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import { useState } from 'react';
import Button from '../components/Button';
import Warning from '../components/Warning';
export default function Signup() {
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
  return (
    <div className='bg-slate-200 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-80 p-2 h-max px-4">
                <Heading label={"SIGN UP"}/>
                <h2 className="text-slate-500">enter the info here</h2>
                <InputBox onChange={(e)=>{setFirstName(e.target.value)}}label={"FIRST NAME"} placeholder={"aaa"}/>
                <InputBox onChange={(e)=>{setLastName(e.target.value)}}label={"LAST NAME"} placeholder={"aaa"}/>
                <InputBox onChange={(e)=>{setUsername(e.target.value)}}label={"USERNAME"} placeholder={"aaa"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"PASSWORD"} placeholder={"123456"}/>
                <div className="pt-4">
                <Button onClick={(e)=>{console.log(firstName)}} label={"SIGN UP"}/>
                <Warning label={"already have an account"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
