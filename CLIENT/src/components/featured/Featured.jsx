import "./Featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="tittle">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={15}/>
        </div>
        <p className="tittle">Total sales made today</p>
        <p className="amaunt">$420</p>
        <p className="desc">Previous transactions processing. Last payment could not be included</p>
        <div className="sammary">
          <div className="item">
            <div className="itemTittle">Target</div>   
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultmaunt">$12.4k </div>  
            </div>   
          </div>
          <div className="item">
            <div className="itemTittle">Last Week</div>   
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultmaunt">$12.4k </div>  
            </div>   
          </div>
          <div className="item">
            <div className="itemTittle">Last Month</div>   
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultmaunt">$12.4k </div>  
            </div>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
