import "./List.scss";
import React, { useState, useEffect } from "react";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from "../../components/datatable/Datatable";
import { UserColums,UserRows,ProductColums,ProductRows } from "../../datatableSource";
function List() {

  const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setRouteKey(currentPath);
  }, [window.location.pathname]);

  const currentPath = window.location.pathname;
  const isUserRoute = currentPath.includes("/users");

  const columns = isUserRoute ? UserColums : ProductColums;
  const rows = isUserRoute ? UserRows : ProductRows;

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Route={currentPath} key={routeKey} columns={columns} rows={rows}/>
      </div>
    </div>
  )
}

export default List
