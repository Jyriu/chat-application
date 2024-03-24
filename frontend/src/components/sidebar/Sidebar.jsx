import React from 'react'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className='divider px-4'></div>
      {/* <Conversations /> */}
      {/* <LogoutButton/> */}
    </div>
  )
}

export default Sidebar
