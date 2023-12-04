import "./Single.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import Datatable from "../../components/datatable/Datatable";
import {  SingleUser, SingleProduct, SingleProductColums, SingleUserColums, SingleUserRows, SingleProductRows } from "../../singleSource";
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
function Single() {


const [chartTitle, setChartTitle] = useState('');
const [SingleTitle, setSingleTitle] = useState('');
 

  const currentPath = window.location.pathname;
  const { UserId, ProductId } = useParams();


  const currentItem = UserId
    ? SingleUser.find((user) => user.id === parseInt(UserId))
    : SingleProduct.find((product) => product.id === parseInt(ProductId));


  useEffect(() => {
    if(currentPath.includes("/users") && currentItem){
      setChartTitle(`${currentItem.valueName} Spendings (Last 6 Months)`);
      setSingleTitle('User Information')
    }
    else if(currentPath.includes("/products") && currentItem){
      setChartTitle(`${currentItem.valueProduct} sellings (Last 6 Months)`);
      setSingleTitle('Product Information');
    }
  },[]);

    const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setRouteKey(currentPath);
  }, [window.location.pathname]);

  const isUserRoute = currentPath.includes("/users");

   const filteredRows = isUserRoute
    ? SingleProductRows.filter((row) => row.user === parseInt(UserId))
    : SingleUserRows.filter((row) => row.product === parseInt(ProductId));

  const columns = isUserRoute ? SingleProductColums : SingleUserColums;

  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {currentPath.includes("/products") ? (
              <Link to={`/editProduct/${ProductId}`}>
                <div className="editButton">Edit</div>
              </Link>
            ):[]}
            <h1 className="tittle">{SingleTitle}</h1>

          <div className="item">
            {currentItem && (
              <img
                src={currentItem.img}
                alt="avatar"
                className="itemImg"
                style={
                  currentPath.includes("/users")
                    ? { borderRadius: "50%" }
                    : { borderRadius: "0%" }
                }
              />
            )}
            <div className="details">
              {currentItem && currentPath.includes("/users") &&(
                <h1 className="itemTitle">
                  {currentItem.valueName}
                </h1>
              )}
              {currentItem && currentPath.includes("/products") &&(
                <h1 className="itemTitle">
                  {currentItem.valueProduct}
                </h1>
              )}
              {currentItem && currentPath.includes("/users") &&(
                <>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelEmail} </span>                 
                    <span className="itemValue">{currentItem.valueEmail}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelPhone} </span>                 
                    <span className="itemValue">{currentItem.valuePhone}</span>

                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelAddress} </span>                 
                    <span className="itemValue">{currentItem.valueAddress}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelCountry} </span>                 
                    <span className="itemValue">{currentItem.valueCountry}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelRattings} </span>                 
                    <span className="itemValue">{currentItem.valueRattings}</span>
                  </div>
                </>
              )}
              {currentItem && currentPath.includes("/products") &&(
                <>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelCategory} </span>                 
                    <span className="itemValue">{currentItem.valueCategory}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelQuantity} </span>                 
                    <span className="itemValue">{currentItem.valueQuantity} units</span>

                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelPrice} </span>                 
                    <span className="itemValue">Ksh. {currentItem.valuePrice}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">{currentItem.labelPreviousPrice} </span>                 
                    <span className="itemValue" style={{textDecoration:'line-through'}}>Ksh. {currentItem.valuePreviousPrice}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          </div>
          <div className="right">
            <Chart aspect={3/1} title ={chartTitle}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="tittle">Last Transactions</h1>
          <Datatable status="Single" key={routeKey} columns={columns} rows={filteredRows}/>
        </div>
      </div>
    </div>
  )
}

export default Single