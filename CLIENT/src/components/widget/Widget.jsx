import "./Widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";
const Widget = ({type}) => {
    let data;


    //temporaly
    const amaunt  = 1000;
    const diff  = 20;


    switch(type){
        case "user":
            data ={
                tittle:'USERS',
                isMoney:false,
                link:"see all users",
                path:"/users",
                icon:(
                    <PersonOutlineOutlinedIcon className="icon" style={{
                      color:'crimson',
                      backgroundColor:'rgba(255,0,0,0.2)'
                    }}/>
                )
            };
            break;
        case "orders":
            data ={
                tittle:'ORDERS',
                isMoney:false,
                link:"view all orders",
                icon:(
                    <ShoppingCartOutlinedIcon className="icon" style={{
                      color:'goldenrod',
                      backgroundColor:'rgba(218,165,32,0.2)'
                    }}/>
                )
            };
            break;
        case "earnings":
            data ={
                tittle:'EARNINGS',
                isMoney:true,
                link:"view net earnings",
                icon:(
                    <MonetizationOnIcon className="icon" style={{
                      color:'green',
                      backgroundColor:'rgba(0,128,0,0.2)'
                    }}/>
                )
            };
            break;
        case "balance":
            data ={
                tittle:'BALANCE',
                isMoney:true,
                link:"see details",
                icon:(
                    <AccountBalanceWalletOutlinedIcon className="icon" style={{
                      color:'purple',
                      backgroundColor:'rgba(128,0,128,0.2)'
                    }}/>
                )
            };
            break;
            default:
                break;
    }
  return (
    <div className="Widget">
      <div className="left">
        <span className="tittle">{data.tittle}</span>
        <span className="counter">{data.isMoney && "$"}{amaunt}</span>
        <Link to={data.path} style={{textDecoration:'none',color:'gray'}}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff}%
        </div>
            {data.icon}
      </div>
    </div>
  )
}

export default Widget
