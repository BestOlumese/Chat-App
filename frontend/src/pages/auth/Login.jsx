import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

  return (
    <>
        <div className="m-auto w-[100%] md:w-[70%] p-[50px] md:p-[0px] mt-[0px] md:mt-[100px] h-[60%]">
            <h1 className="text-6xl text-slate-800 font-bold">Log <span className="text-white">In</span></h1>

            <form className='mt-[40px]' onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className='text-slate-800 text-[20px] mb-[5px]'>Username</label>
                    <input type="text" placeholder="Username" className="input input-md input-bordered w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <label className='text-slate-800 text-[20px] mb-[5px]'>Password</label>
                    <input type="password" placeholder="Password" className="input input-md input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex flex-col mt-[20px]">
                    <button className="btn bg-slate-800 w-full text-white text-[20px]" disabled={loading}>
                        {loading ? <span className='loading loading-spinner text-success'></span> : "Log In"}
                    </button>
                </div>
                <div className="flex flex-col mt-[20px]">
                    <Link to='/signup' className="m-auto text-white underline cursor-pointer hover:text-slate-800 underline-offset-2">Don't have an account? Sign In</Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login