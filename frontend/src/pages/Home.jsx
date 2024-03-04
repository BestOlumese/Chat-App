import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'
import useConversation from '../zustand/useConversation'

const Home = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()

  return (
    <>
        <div className="flex w-full">
            <div className={`sidebar ${(selectedConversation) ? 'hide-sidebar' : ''}`}>
                <Sidebar />
            </div>
            <div className={`message w-full ${(selectedConversation) ? 'show-message' : ''}`}>
                <MessageBox />
            </div>
        </div>
    </>
  )
}

export default Home