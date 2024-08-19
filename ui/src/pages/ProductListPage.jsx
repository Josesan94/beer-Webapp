import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { formatBrand } from "../utils/formatBrand";

export default function ProductListPage() {

    const {data: products, isLoading, error} = useFetch('/products')

    console.log(products)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products: {error.message}</div>;


  return (
    <div>
      <h1>Product Listing Page</h1>
      <ul>
        {products.map(product => (
        <li key={product.id}>
            <Link to={`/product/${product.id}-${formatBrand(product.brand)}`}>
            {product.brand}
            </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}