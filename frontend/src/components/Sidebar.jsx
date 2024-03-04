import React from 'react'
import Search from './Search'
import ConverssationList from './ConverssationList'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className="bg-white w-[full] h-[100vh] overflow-hidden overflow-y-auto ">
        <Search />
        <Conversations />
    </div>
  )
}

export default Sidebar