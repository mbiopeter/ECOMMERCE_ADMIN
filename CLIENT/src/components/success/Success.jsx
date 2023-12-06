import "./Success.scss"
import DoneIcon from '@mui/icons-material/Done';
const Success = ({visibility, handleOk, massage}) => {

  return visibility  ? (
    <div className="success">

        <div className="overlayer">

        </div>
        <div className="pop">
            <div className="container">
                <DoneIcon className="icon"/>
            </div>
            <span>Success</span>
            <p>{massage}</p>
            <div className="btn">
                <button onClick={handleOk}>OK</button>
            </div>
        </div>
    </div>
  ): null
}

export default Success;
