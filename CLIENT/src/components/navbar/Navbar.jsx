import { useContext } from "react";
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsActiveIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <div className="counter">7</div>
          </div>
          <div className="item">
            <ViewListIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://media.istockphoto.com/id/464934517/photo/heart-of-jesus-christ-typical-catholic-image.webp?s=1024x1024&w=is&k=20&c=2wdcgduV289oH3FuVMBi_wUnXxtAaCP7wP2WIee689o=" alt="" className='Avator'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
