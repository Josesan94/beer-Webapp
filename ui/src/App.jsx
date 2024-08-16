
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {ProductDetailPage} from './pages/ProductDetailPage'
import {ProductListPage} from './pages/ProductListPage'
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<ProductListPage/>}  />
          <Route path="/product/:productId-:productBrand" element={<ProductDetailPage/>}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
