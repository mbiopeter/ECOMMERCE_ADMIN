
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Datatable from "../../components/datatable/Datatable";
import { SingleUserColums, SingleUserRows } from "../../singleSource";
import { useEffect,useState } from "react";
import './Home.scss';
const Home = () => {


  const currentPath = window.location.pathname;
  const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setRouteKey(currentPath);
  }, [window.location.pathname]);

  const columns = SingleUserColums;
  const rows = SingleUserRows;
  return (
    <div className='home'>
        <Sidebar/>

        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            < Widget type="user"/>
            < Widget type="orders"/>
            < Widget type="earnings"/>
            < Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2/1} title="Last 6 Months(Revenue)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Datatable status='Single' Route={currentPath}  key={routeKey} columns={columns} rows={rows}/>
          </div>
        </div>
    </div> 
  )
}
export default Home;
