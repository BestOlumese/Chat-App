import React from 'react'
import useConversation from '../zustand/useConversation'
import { useAuthContext } from '../context/AuthContext'
import { extractTime } from '../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId == authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const formattedTime = extractTime(message.createdAt)
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const userName = fromMe ? authUser.username : selectedConversation?.username;
  const bubbleBgColor = fromMe ? '' : 'bg-slate-400 text-white';
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user img" src={profilePic} />
          </div>
        </div>
        <div className="chat-header">
          {userName}
          <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
        </div>
        <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        {/* <div className="chat-footer opacity-50">
          Delivered
        </div> */}
      </div>
    </>
  )
}

export default Message