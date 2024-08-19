/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage'
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<ProductListPage/>}  />
          <Route exact path="/product/:productId" element={<ProductDetailPage/>} />          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
