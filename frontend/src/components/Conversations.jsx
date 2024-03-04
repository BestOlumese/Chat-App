import React from 'react'
import ConverssationList from './ConverssationList'
import useGetConversations from '../hooks/useGetConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  return (
    <>
        

        {conversations.map((conversation) => (
          <ConverssationList key={conversation._id} conversation={conversation} />
        ))}

        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </>
  )
}

export default Conversations