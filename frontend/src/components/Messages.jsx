import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../hooks/useGetMessage'
import  MessageSkeleton from './MessageSkeleton'
import useListenMessage from '../hooks/useListenMessage'

const Messages = () => {
  const {loading, messages} = useGetMessage()
  useListenMessage()
  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])

  return (
    <div className='h-[75vh] md:h-[77vh] overflow-hidden overflow-y-auto p-4'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <h1 className='text-xl'>Send a message to start a conversation</h1>
      )}
    </div>
  )
}

export default Messages