import React from "react";
import { useFetch } from "../hooks/useFetch"
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ProductListGrid from "../components/ProductGrid";
import HeaderBar from "../components/NavBar";


const WelcomeText = styled.div`
  margin-left: 36px;
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  color:gray;
`;


export default function ProductListPage() {

    const {data: products, isLoading, error} = useFetch('/products')

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products: {error.message}</div>;


  return (
    <>
      <HeaderBar/>
      <WelcomeText>
          <Typography variant="h6" color="main" mb={1}  >Hi Mr. Michael,</Typography>
          <Typography variant="h1" color="black" mb={4}><strong>Welcome Back!</strong></Typography>
          <Typography variant="h1" color="black">Our Products</Typography>
      </WelcomeText>
      <ProductListGrid products={products}/>
    </>
  )
}