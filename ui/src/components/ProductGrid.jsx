import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = styled(Grid)`
  padding: 16px;
`;

export default function ProductListingPage({ products }) {
  return (
    <ProductGrid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} key={product.id}>
            <ProductCard product={product}/>
        </Grid>
      ))}
    </ProductGrid>
  );
}