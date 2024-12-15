import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Verify from "./Pages/Verify/Verify";
import MyOrder from "./Pages/MyOrders/MyOrder";

const App = () => {

  const [showLogin , setShowLogin ] = useState(false);

  return (
    
    <>

      {showLogin ? <LoginPopUp setShowLogin = {setShowLogin}/> : <></>}

      <div className="app">

        <Navbar setShowLogin = {setShowLogin}/>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrder/>}/>

        </Routes>

      </div>

      <Footer/>

    </>

  );

};

export default App;
