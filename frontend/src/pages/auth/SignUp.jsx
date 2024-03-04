import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [input, setInput] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmpassword: '',
        gender: ''
    }) 

    const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input)
    }
  return (
    <>
        <div className="m-auto w-[100%] md:w-[70%] p-[50px] md:p-[0px] mt-[0px] md:mt-[40px] h-[60%]">
            <h1 className="text-4xl text-slate-800 font-bold">Sign <span className="text-white">Up</span></h1>

            <form className='mt-[10px]' onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className='text-slate-800 text-[15px] mb-[5px]'>Full Name</label>
                    <input type="text" placeholder="Full Name" className="input h-[45px] input-bordered w-full" value={input.fullName} onChange={(e) => setInput({...input, fullName: e.target.value})} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <label className='text-slate-800 text-[15px] mb-[5px]'>Username</label>
                    <input type="text" placeholder="Username" className="input h-[45px] input-bordered w-full" value={input.username} onChange={(e) => setInput({...input, username: e.target.value})} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <label className='text-slate-800 text-[15px] mb-[5px]'>Password</label>
                    <input type="password" placeholder="Password" className="input h-[45px] input-bordered w-full"  value={input.password} onChange={(e) => setInput({...input, password: e.target.value})} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <label className='text-slate-800 text-[15px] mb-[5px]'>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" className="input h-[45px] input-bordered w-full" value={input.confirmpassword}  onChange={(e) => setInput({...input, confirmpassword: e.target.value})} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <label className='text-slate-800 text-[15px] mb-[5px]'>Gender</label>
                    <select className="select w-full h-[45px]"  onChange={(e) => setInput({...input, gender: e.target.value})}>
                        <option disabled selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col mt-[20px]">
                    <button className="btn bg-slate-800 w-full text-white text-[20px] h-[45px]">Sign Up</button>
                </div>
                <div className="flex flex-col mt-[20px]">
                    <Link to='/login' className="m-auto text-white underline cursor-pointer hover:text-slate-800 underline-offset-2">Already have an account? Log In</Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp