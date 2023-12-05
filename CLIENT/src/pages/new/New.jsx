import "./New.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { ProductRows,UserRows } from "../../datatableSource";
import { useParams } from 'react-router-dom'
import axios from 'axios';

function New({title}) {
  const [values, setValues] = useState({
      Image: null,
      Username: '',
      Fullname: '',
      Email: '',
      Phonenumber: '',
      Address: '',
      Country: '',
      Password: '',
  });

  const { ProductId } = useParams();
    const currentPath = window.location.pathname;
    const currentItem = ProductRows.find((product) => product.id === parseInt(ProductId));

    const handleInput = (event) => {
    const { name, value, files } = event.target;

    if (name === "Image") {
      setValues((prevValues) => ({
        ...prevValues,
        Image: files ? files[0] : null,
      }));
    } 
    else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.post('http://localhost:8080/newuser/', formData, { withCredentials: true })
      .then((res) => {
        if (res.data.Signup) {
          console.log('user successfully added');
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img style={(currentPath.includes('/products') || currentPath.includes('/editProduct')  ? {borderRadius:'5px', width:'200px', height:'200px'} : {borderRadius:'50%'})}

              src={values.Image ? URL.createObjectURL(values.Image) : currentPath.includes('/editProduct') ?  currentItem.img : "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
              alt="none" 

            />
          </div>
          <div className="right">
            {currentPath.includes('/users') && currentPath.includes('/new') ? (
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon"/>
                  </label>
                  <input type="file" id="file" style={{ display: 'none' }} onChange={handleInput} name="Image"/>
                </div>           
                <div className="formInput" >
                  <label>Username</label>
                  <input type="text" placeholder="jane_doe" onChange={handleInput} name="Username"/>
                </div>
                <div className="formInput" >
                  <label>Name and Surname</label>
                  <input type="text" placeholder="Jane Doe" onChange={handleInput} name="Fullname"/>
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <input type="Email" placeholder="janedoe@gmail.com" onChange={handleInput} name="Email"/>
                </div>
                <div className="formInput" >
                  <label>Phone</label>
                  <input type="text" placeholder="+254 7123 456 78" onChange={handleInput} name="Phonenumber"/>
                </div>
                <div className="formInput" >
                  <label>Address</label>
                  <input type="text" placeholder="Nairobi westlands" onChange={handleInput} name="Address"/>
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input type="password" placeholder="" onChange={handleInput} name="Password"/>
                </div>
                 <div className="formInput" >
                  <label>County</label>
                  <input type="text" placeholder="Kenya" onChange={handleInput} name="Country"/>
                 </div>
                <div className="button" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                  <button type="submit">Send</button>
                </div>
              </form>
            ):[]}

            {currentPath.includes('/products') && currentPath.includes('/new') ? (
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon"/>
                  </label>
                  <input type="file" id="file" onChange={handleInput} style={{display:'none'}}/>
                </div>           
                <div className="formInput" >
                  <label>Product</label>
                  <input type="text" placeholder="Galaxy a14"/>
                </div>
                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" placeholder="4GB RAM storage 128GB "/>
                </div>
                <div className="formInput" >
                  <label>Category</label>
                  <input type="text" placeholder="Phone Accessories"/>
                </div>
                <div className="formInput" >
                  <label>Price</label>
                  <input type="text" placeholder="24000"/>
                </div>
                <div className="formInput" >
                  <label>Previous Price</label>
                  <input type="text" placeholder="30000"/>
                </div>
                <div className="formInput" >
                  <label>Stoke</label>
                  <input type="text" placeholder="90 units"/>
                </div>
                <div className="formInput"></div>
                <div className="button" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                  <button>Send</button>
                </div>
              </form>
            ):[]}

            {currentPath.includes('/editProduct')  ? (
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon"/>
                  </label>
                  <input type="file" id="file" onChange={handleInput} style={{display:'none'}}/>
                </div>           
                <div className="formInput" >
                  <label>Product</label>
                  <input type="text" value={currentItem.product}/>
                </div>
                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" value={currentItem.description}/>
                </div>
                <div className="formInput" >
                  <label>Category</label>
                  <input type="text" value={currentItem.category}/>
                </div>
                <div className="formInput" >
                  <label>Current Price</label>
                  <input type="text" value={currentItem.price}/>
                </div>
                <div className="formInput" >
                  <label>Previous Price</label>
                  <input type="text" value={currentItem.previousPrice}/>
                </div>
                <div className="formInput" >
                  <label>Stoke</label>
                  <input type="text" value={currentItem.amaunt}/>
                </div>
                <div className="formInput"></div>
                <div className="button" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                  <button>Save</button>
                </div>
              </form>
            ):[]}


          </div>
        </div>
      </div>
    </div>
  )
}

export default New
