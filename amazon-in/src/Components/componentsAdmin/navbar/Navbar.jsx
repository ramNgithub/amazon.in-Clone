import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className='items'>
        <div className='item'>
          <LanguageOutlinedIcon className="icon"/>
          English
          </div>

          <div className='item'>
          <DarkModeOutlinedIcon className="icon"/>
        
          </div>

          <div className='item'>
          <FullscreenExitOutlinedIcon className="icon"/>
        
          </div>

          <div className='item'>
          <NotificationsNoneOutlinedIcon className="icon"/>
          <div className='counter'>1</div>
        
          </div>

          <div className='item'>
          <ChatBubbleOutlinedIcon className="icon"/>
          <div className='counter'>2</div>
        
          </div>

          <div className='item'>
          <ListOutlinedIcon className="icon"/>
        
          </div>

          <div className='item'>
         <img
         src="https://avatars.githubusercontent.com/u/107496019?v=4"
           alt="me"  
           className='avatar'
           />      
          </div>
        </div>
        </div>
        </div>
  )
}

export default Navbar