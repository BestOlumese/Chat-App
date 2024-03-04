import React, { useState } from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from '../hooks/useLogout';
import useConversation from '../zustand/useConversation'
import useGetConversations from '../hooks/useGetConversations'
import { toast } from 'react-toastify';

const Search = () => {
    const [search, setSearch] = useState("")
    const {setSelectedConversation} = useConversation()
    const { conversations } = useGetConversations()
    const {loading, logout} = useLogout()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return
        if(search.length < 3) {
            return toast.error('Search term must be at least three characters long')
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

        if(conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else {
            toast.error("No user found!")
        }
    }

  return (
    <>
        <div className="navbar bg-white text-slate-800 pb-[10px]">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered bg-white border-slate-800 flex items-center">
                        <input type="text" className="grow w-[270px] custom-width-form" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </form>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    {
                        !loading ? (
                            <IoLogOutOutline className='text-xl' onClick={logout} />
                        ) : (
                            <span className="loading loading-spinner"></span>
                        )
                    }
                </button>
            </div>
            </div>
    </>
  )
}

export default Search