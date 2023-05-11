import { Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RequireAuth from './components/Auth/RequireAuth';
import AddProduct from './components/Functional/AddProduct';
import DisplayProductDetails from './components/Functional/DisplayProductDetails';
import ManageProducts from './components/Functional/ManageProducts';
import Products from './components/Functional/Products';
import UpdateProduct from './components/Functional/UpdateProduct';
import Navbar from './components/Shared/Navbar';
import Home from './components/Static/Home';
import NotFound from './components/Static/NotFound';
import ThankYou from './components/Static/ThankYou';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/products" element={<Products/>}> </Route>
      <Route path="/productDetails/:productID" element={<DisplayProductDetails/> }></Route>
      <Route path="/addProduct" element={<RequireAuth> <AddProduct/> </RequireAuth>}> </Route>
      <Route path="/manageProducts" element={<RequireAuth> <ManageProducts/> </RequireAuth>}> </Route>
      <Route path="/updateProduct/:productID" element={<RequireAuth> <UpdateProduct/> </RequireAuth>}></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/forgetPassword" element={<ForgetPassword/>} ></Route>
      <Route path="/register" element={<Register/>} ></Route>
      <Route path="/thankyou" element={<ThankYou/>} ></Route>
      <Route path="*" element={<NotFound/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
