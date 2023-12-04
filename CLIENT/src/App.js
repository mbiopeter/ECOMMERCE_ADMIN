import { useContext } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className= { darkMode ? "app dark": "app" }>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />

            <Route path="Users">
              <Route index element={<List/>} />
              <Route path=":UserId" element={<Single/>} />
              <Route path="New" element={<New title="Add New User" />} />
            </Route>     
            <Route path="Products">
              <Route index element={<List />} />
              <Route path=":ProductId" element={<Single />} />
              <Route path="New" element={<New title="Add New Product" />} />
            </Route>
            <Route path="editProduct">
              <Route path=":ProductId" element={<New title="Edit Product" />} />
            </Route>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
