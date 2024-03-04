import React, { useState } from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import useSendMessage from '../hooks/useSendMessage.js'
const MessageForm = () => {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <div className='px-10 py-3'>
        <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Write a messsage..." value={message} onChange={(e) => setMessage(e.target.value)} />
                {loading ?  <div className="loading loading-spinner"></div> : <IoPaperPlaneOutline />}
            </label>
        </form>
    </div>
  )
}

export default MessageForm