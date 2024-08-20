/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage'
import { ThemeProvider } from '@mui/material';
import './App.css'
import theme from './theme';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/products" element={<ProductListPage/>}  />
          <Route  path="/product/:productId" element={<ProductDetailPage/>} /> 
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
