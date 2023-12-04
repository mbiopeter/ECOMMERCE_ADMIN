import { useContext } from "react";
import './Sidebar.scss';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:'none'}}>
          <span className="logo">Zawadizone</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="tittle">MAIN</p>
          <li>
            <GridViewOutlinedIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="tittle">LISTS</p>
          <Link to="/users" style={{textDecoration:'none'}}>
            <li>
              <Person2OutlinedIcon className='icon'/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration:'none'}}>
            <li>
              <LocalGroceryStoreOutlinedIcon className='icon'/>
              <span>Product</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="tittle">USEFULL</p>
          <li>
            <InsertChartIcon className='icon'/>
            <span>Starts</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notification</span>
          </li>
          <p className="tittle">SERVICE</p>
          <li>
            <SettingsSuggestIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <VpnKeyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="tittle">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="coloroption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
