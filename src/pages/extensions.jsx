import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth"
import { useState } from 'react'
import { auth } from '../../firebase'


const extensions = () => {

  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = signInWithPopup(auth,provider).then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    signInWithRedirect(auth, provider);
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  })

  const handleSubmit = async(email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("User created successfully")
    } catch (error) {
      alert("Error creating user: ", error.message)
    }
    
    
  }

  return (
    // <div className=' h-screen w-screen flex flex-col items-center justify-start'>
    //   <header className=' h-15 w-full bg-gray-400 flex  items-center justify-between gap-4 m-3 rounded-lg'>
    //     <img src="" alt="" />
    //     <button className='mr-3'>Click me</button>
    //   </header>
    //   <main className='flex justify-between items-center'>
    //     <h1 className='text-2xl text-bold text-left'>Extension List</h1>
    //     <div className='flex gap-4'>
    //       <button className='bg-blue-500 rounded-lg text-lg p-2'>All</button>
    //       <button className='bg-blue-500 rounded-lg text-lg p-2'>Active</button>
    //       <button className='bg-blue-500 rounded-lg text-lg p-2'>Inactive</button>
    //     </div>
    //   </main>
    //   <div>
    //     <div className='h-50 w-50 bg-gray-400 rounded-lg'></div>
    //   </div>
      
    // </div>
    <div className='h-screen flex flex-col items-center justify-start'>
      <form action=""
      className='flex flex-col gap-4 h-80 w-75 mt-50 border-2 rounded-lg p-4'>
        <h1 className='text-2xl text-bold text-center'>Sign up</h1>
        <input className='border-2 rounded-lg p-2' type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className='border-2 rounded-lg p-2' type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit'className='bg-blue-500 p-3 rounded-lg' onClick={handleSubmit}>Submit</button>
        <button className='bg-green-500 p-3 rounded-lg' onClick={handleGoogleSignIn}>Sign in with Google</button>
      </form>
    </div>
  )
}

export default extensions