import React from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button';
import Warning from '../components/Warning';
import { useState } from 'react';
export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
   <>
   <div className='bg-slate-200 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-80 p-2 h-max px-4">
                <Heading label={"SIGN IN"}/>
                <InputBox onChange={(e)=>{setUsername(e.target.value)}}label={"USERNAME"} placeholder={"aaa"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"PASSWORD"} placeholder={"123456"}/>
                <div className="pt-4">
                <Button onClick={(e)=>{console.log(username)}} label={"SIGN IN"}/>
                <Warning label={"donot have an account"} buttonText={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
