import React from 'react'
import '../css/sidebar.css';
import SideBarChat from './SideBarChat';
import { Avatar,IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';



function SideBar() {
  return (
    <div className='sidebar'>
      <div className='siderbarheader'>
        <Avatar />
        <div className='sidebarHeaderRight'>
          <IconButton>
              <DonutLargeIcon />
          </IconButton>
            <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>

      </div>
      <div className='sidebarsearch'>
        <div className='sidebarsearchcontainer'>
          <SearchOutlined/>
          <input placeholder='search or start new chat' type='text'/>
        </div>
        
      </div>
      <div className='sidebarchats'>
        <SideBarChat addNewChat/>
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
      </div>
    </div>
  )
}

export default SideBar;