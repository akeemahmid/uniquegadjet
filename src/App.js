import './App.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/HomeComponent/Home';
import Singleproduct from './Components/Pages/HomeComponent/Singleproduct';
import Product from './Components/Pages/Products/Product';
import Cart from './Components/Pages/Products/Cart';
import Navbar from './Components/SharedPages/Navbar';
import Sign from './Components/Pages/Logs/Sign';
import Login from './Components/Pages/Logs/Login';
import { useState } from 'react';
import Contact from './Components/Pages/Contacts/Contact';
import About from './Components/Pages/Abouts/About';
// import { useEffect } from 'react';
// import {LinearProgress} from "@mui/material"
// import axios from 'axios';
// const url = 'https://api.github.com/users'

function App() {
  const [User, setUser] = useState('');
  // const [loading, setLoading] = useState(true)

//   const fetchData = async()=>{
//     const {items} = await axios.get(url)
//     console.log(items)
//     setLoading(false)
// }
//   useEffect(async()=>{
//     fetchData()
//   },[])
//   if(loading){
//     <LinearProgress style={{background:'gray'}}/>
//   }
  return (
<>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path='sign' element={<Sign setUser={setUser} />}/>
    <Route path='login'  element={<Login setUser={setUser}/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='products' element={<Product/>}/>
    <Route path='products/:productId' element={<Singleproduct/>}/>
    <Route path='cart' element={<Cart/>}/>
  </Route> 
</Routes>
</BrowserRouter> 
 </>
  );


} 

export default App;
