import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../context/SocketContext'

const ConverssationList = ({ conversation }) => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
        <div className={`flex items-center border-t-2 border-t-slate-400 p-4 cursor-pointer hover:bg-slate-200 w-full select-none ${isSelected ? 'bg-slate-800 text-white hover:bg-slate-800' : ''}`} onClick={() => {setSelectedConversation(conversation)}}>
          <div className="rounded-full w-10 mr-3 relative">
            <img src={conversation.profilePic} className='rounded-full w-10 cursor-pointer mr-3' />
            <div className={`badge badge-success badge-xs absolute top-0 right-0 ${isOnline ? 'online' : 'offline'}`}></div>
          </div>
            <div className="flex flex-1 flex-col">
                <h2 className=' font-semibold text-[20px]'>{conversation.fullName}</h2>
            </div>
            {/* <div className="flex-none flex flex-col">
              <p>12:00</p>
              <div className="badge badge-success badge-md w-5 text-center text-white">2</div>
            </div> */}
        </div>
    </>
  )
}

export default ConverssationList