import React, { useEffect } from 'react'
import MessageBar from './MessageBar'
import Messages from './Messages'
import MessageForm from './MessageForm'
import useConversation from '../zustand/useConversation'

const MessageBox = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    (selectedConversation) ? (
    <div className='h-[100vh] overflow-hidden w-full'>
        <MessageBar />
        <Messages />
        <MessageForm />
    </div>)
    : (<NoMessageBox/>)
  )
}

const NoMessageBox = () => {
    return (
        <div className="h-[100vh] py-[270px] text-center overflow-hidden">
            <h1 className='text-xl'>Select a chat to start Messaging</h1>
        </div>
    )
}

export default MessageBox