import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import NotFound from '../NotFound';

const Layout = ({ page }) => {

    let elem;

    if(page == "login") {
        elem = <Login />
    } else if(page == "signup") {
        elem = <SignUp />
    } else if(page == "404") {
        elem = <NotFound />
    }
  return (
    <div className="flex flex-col-reverse md:flex-row">
        <div className="w-[100%] md:w-[45%] h-[100%] md:h-[100vh] bg-slate-400">
            {elem}
        </div>
        <div className="w-[100%] md:w-[55%] h-[100%] md:h-[100vh] p-[70px] md:p-[150px]">
            <h1 className='text-5xl md:text-7xl font-semibold text mb-[40px] text-white'>Connect with friends easily and quickly</h1>
            <p className='text-3xl font-light text-white'>Our chat app is the perfect way to stay connected with firends and family.</p>
        </div>
    </div>
  )
}

export default Layout