// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { formatBrand } from '../utils/formatBrand';

const StyledCard = styled(Card)`
  position: relative;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  background-color: #ffffff; /* Fondo blanco */
  margin-top:35px;

  @media (max-width: 500px) {
    margin-top: 25px;
    border-radius: 12px;
  }
`;

const Price = styled(Typography)`
  margin-top: 8px;
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 1.25rem; /* Ajusta el tamaño de la fuente en pantallas pequeñas */
  }
`;


const AddButton = styled(Button)`
  position: absolute;
  border-radius: 8px, 0px, 8px, 0px !important;
  z-top:0;
  height: 60px;
    min-width: 60px !important; /* Reduce el tamaño del botón en pantallas pequeñas */
    max-width:  60px;
    bottom: 0px;
    top:25px;
    right: 0px;
    left:15px;
  background-color: rgba(255, 159, 36, 1) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &:hover {
    background-color: darkorange;
  }

  @media (max-width: 500px) {
    height: 40px;
    min-width: 40px !important; /* Reduce el tamaño del botón en pantallas pequeñas */
    max-width:  40px;
    bottom: 0px;
    top:26px;
    right: 0px;
    left:16px;
  }

  @media (min-width: 900px) {
    height: 80px;
    min-width: 80px !important; /* Reduce el tamaño del botón en pantallas pequeñas */
    max-width:  80px;
    bottom: 0px;
    top:26px;
    right: 0px;
    left:16px;
  }
`;





const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/product/${product.id}-${formatBrand(product.brand)}`)
  }

  return (
    <StyledCard>
      <Typography variant="h5" 
          sx={{
            fontWeight: 'bold',
            '@media (max-width: 500px)': {
              fontSize: '1.25rem',
            },
          }}>{product.brand}</Typography>
      <CardMedia
        component="img"
        height="fixed"
        width="140"
        image={product.image}
        alt={product.brand}
        sx={{ paddingTop: '16px' }}
      />
      <CardContent>
        <Stack spacing={2} display={'flex'} direction={'row'} justifyContent={'flex-start'} alignItems={'center'}>
          <StarIcon color='warning'/>
          <Typography variant='body1' sx={{
            opacity: '0.5',
            '@media (max-width: 500px)': {
              fontSize: '0.8rem',
              paddingTop:'0px'
            },
            '@media (min-width: 900px)': {
              fontSize: '1.75rem',
              paddingTop:'0px'
            },
          }}> {product.abv}</Typography>
        </Stack>
        <Stack mt={2} display={'flex'} direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
        <Price variant="h5" 
        sx={{
            fontWeight: 'bold',
            '@media (max-width: 500px)': {
              fontSize: '1rem',
              marginTop:'px'
            },
            '@media (min-width: 900px)': {
              fontSize: '1.75rem',
              paddingTop:'0px'
            },
          }}>$28,65</Price>
        <AddButton sx={{borderRadius:"8px 0px 8px 0px"}} onClick={goToDetails}>
        <AddIcon color="main" fontSize="medium" />
      </AddButton>
        </Stack>
      </CardContent>
      
    </StyledCard>
  )
}


export default ProductCard;