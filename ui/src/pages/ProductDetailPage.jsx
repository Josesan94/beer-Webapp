/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import api from "../services/api";

export default function ProductDetailPage () {

    const {productId} = useParams()
    const [id, brand] = productId.split('-')
    const { data: product, isLoading: productLoading, error: productError } = useFetch(`/product/${productId}`);
    
    console.log('Product ID:', productId);
    console.log('Product Brand:', brand);

    const [skuDetails, setSkuDetails] = useState({});

    useEffect(() => {
        const fetchSkuDetails = async () => {
            if(product && product.skus) {
                const newSkusDetails = {};

                for(const sku of product.skus) {
                    try {
                        const response = await api.get(`/stock-price/${sku.code}`); 
                        newSkusDetails[sku.code] = response.data
                    } catch(error) {
                        console.error(`Error fetching SKU ${sku.code} details:`, error);
                    }
                }
                setSkuDetails(newSkusDetails);
            };
        }

        fetchSkuDetails();
    }, [product])


    if (productLoading) return <div>Loading...</div>;
    if (productError) return <div>Error loading product details: {productError.message}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div>
      <h1>{product.brand}</h1>
      <p>{product.description}</p>

      <h2>Available SKUs:</h2>
      <ul>
        {product.skus.map(sku => (
          <li key={sku.code}>
            {sku.name}: ${skuDetails[sku.code]?.price / 100} - In Stock: {skuDetails[sku.code]?.stock}
          </li>
        ))}
      </ul>
    </div>
    )
}

