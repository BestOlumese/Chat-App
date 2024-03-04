import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import useConversation from '../zustand/useConversation'

const MessageBar = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  return (
    <>
        <div className="navbar bg-white text-slate-800 w-full border-l-2 border-slate-500">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={() => setSelectedConversation(null)}>
                  <IoChevronBackOutline className='text-xl' />
                </button>
            </div>
            <div className="flex-1 pl-2">
                <img src={selectedConversation.profilePic} className='rounded-full w-10 cursor-pointer' />
                <a className="ml-3 cursor-pointer text-xl">{selectedConversation.fullName}</a>
            </div>
            </div>
    </>
  )
}

export default MessageBar