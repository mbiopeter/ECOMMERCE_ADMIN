import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";



const Datatable = ({columns, rows, Route, status}) => {


  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  const [data, setData] = useState(rows);
  const [tittle, setTittle] = useState();
  const [del, setDel] = useState();


  useEffect(() => {
    if (Route === '/users') {
      setTittle('Add New users');
      setDel(true);
    } else if (Route === '/products') {
      setTittle('Add New products');
      setDel(false);
    }
  }, [Route]);





  const actionColumn = status !== 'Single'
   ? [
    {
      field:'action',
      headerName:'Action',
      width:200,
      renderCell:(params) => {
        return(
          <div className="cellAction">
              <Link to={`${Route}/${params.row.id}`} style={{textDecoration:'none'}}>
                <div className="viewButton">View</div>
              </Link>
            {del === true ? (
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>): (<p></p>)}
          </div>
        )
      }
    }
  ]:[]



  return (
    <div className='datatable'>
        <div className="datatableTitle">
          {tittle}
          {status !== 'Single' ? (
            <Link to={`${Route}/new`}  className="link">
              Add New
            </Link>
          ): []}
        </div>
          <DataGrid className="datagrid"
              rows={data}
              columns={columns.concat(actionColumn )}           
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10},
                  color:'gray'
              },
              }}
              pageSizeOptions={[10] }
              checkboxSelection
        />
    </div>
  )
}

export default Datatable
