import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Products from './components/Products';
import Detail from './components/Detail';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
        
    </div>
  )
}
export default App