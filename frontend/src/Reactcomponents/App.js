import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Main/Home";
import Admin from "../Auth/Admin"
import Login from "../Auth/Login/login"
import Jordan from "../Main/Jordan"
import Adidas from "../Main/Adidas"
import CO from "../Main/CO"


function App() {
  return (
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/admin" element={<Admin />}/>
<Route path="/login" element={<Login />}/>
<Route path="/jordan" element={<Jordan />}/>
<Route path="/adidas" element={<Adidas />}/>
<Route path="/checkout" element={<CO/>}/>

</Routes>

    );
}

export default App;