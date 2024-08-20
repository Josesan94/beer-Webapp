/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import api from "../services/api";
import styled from 'styled-components';
import { IconButton, Typography, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Bag from '/products/bag.png'

const Container = styled.div`
    background-color: #ffffff;
    padding: 16px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const ProductImage = styled.img`
    height:240px;
    width: 240px;
    max-width: 100%;
    margin-bottom: 16px;
`;

const Price = styled(Typography)`
  color: #FFA500;
  font-weight: bold;
`;


export default function ProductDetailPage () {
    const navigate = useNavigate()
    const {productId} = useParams()
    const { data: product, isLoading: productLoading, error: productError } = useFetch(`/product/${productId}`);

    const [selectedSku, setSelectedSku] = useState(null);
    const [skuDetails, setSkuDetails] = useState({});
    const [error, setError] = useState(null);


    useEffect(() => {
        if (product && product.skus.length > 0) {
          setSelectedSku(product.skus[0].code); 
        }
      }, [product]);


    useEffect(() => {
    const fetchSkuDetails = async () => {
        if(product && product.skus) {
            const newSkusDetails = {};

            for(const sku of product.skus) {
                try {
                    const response = await api.get(`/stock-price/${sku.code}`); 
                    console.log("response de skus", response.data)
                    newSkusDetails[sku.code] = response.data
                } catch(error) {
                    setError(error.message);
                    window.alert(`Error fetching product details: ${error.message}`);
                }
            }
            setSkuDetails(newSkusDetails);
        };
    }

        fetchSkuDetails();
    }, [selectedSku])

    const handleSizeChange = (sku) => {
        setSelectedSku(sku.code);
      };

    const handlebackToProducts = () => {
        navigate('/products')
    }


    if (productLoading || !selectedSku || !skuDetails[selectedSku]) {
        return <div>Loading...</div>;
      }
    if (productError) return <div>Error loading product details: {productError.message}</div>;

    return (
    <>
        <Container>
            <Header>
                <IconButton onClick={handlebackToProducts}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6">Detail</Typography>
                <IconButton onClick={() => window.alert('Menu options not implemented.')}>
                    <MoreVertIcon />
                </IconButton>
            </Header>
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <ProductImage src={product.image} alt={product.brand} />
            </Stack>
            <Stack display={"flex"} direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h5">{product.brand}</Typography>
                <Price variant="h5">${(skuDetails[selectedSku].price / 100).toFixed(2)}</Price>
            </Stack>
            <Stack mb={5} display={'flex'} justifyContent={"initial"} alignItems={'baseline'}>
                <Typography variant="body1" color="textSecondary">
                    Origin: {product.origin} | Stock: {skuDetails[selectedSku].stock}
                </Typography>
            </Stack>
            <Stack mb={5} display={'flex'} alignItems={'baseline'}>
                <Typography variant="h6" color={"black"}>Description</Typography>
                <Typography variant="body1" color={"textSecondary"} style={{ marginTop: 8, textAlign:"justify" }}>
                    {product.information}
                </Typography>
            </Stack>
            <Stack mb={5} display={'flex'} >
                <Typography variant="h6" mb={2} color={'black'} textAlign={'initial'}>Size</Typography>
                <Stack display={'flex'} direction={'row'} justifyContent={'space-between'}>
                    {product?.skus.map((sku) => (
                    <Button
                        variant={ "outlined"}
                        style={{
                            opacity: selectedSku === sku.code ? "1" : "0.5",
                            border: "1px solid rgba(150, 150, 150, 1)",
                            borderRadius: "15.5px",
                            borderColor: selectedSku === sku.code ? "#FFA500" : "rgba(150, 150, 150, 1)",
                            color: selectedSku === sku.code ? "#FFA500" : "#000",
                        }}
                        key={sku.code}
                        onClick={() => handleSizeChange(sku)}
                        >
                        {sku.name}
                    </Button>
                    ))}
                </Stack>
            </Stack>
            <Stack display={'flex'} direction={'row'} justifyContent={'space-between'}>
                <img src={Bag} height={'54px'} width={'54px'}/>
                <Button 
                    sx={{width:'80%', backgroundColor: "#FFA500", color:"white", borderRadius:'12px', }} variant="contained"
                    onClick={() => window.alert(`Add to cart not implemented. Product: ${product.brand}, Price: ${skuDetails[selectedSku].price}`)}
                >
                    Add to cart
                </Button>
            </Stack>
        </Container>
    </>
    )
}

