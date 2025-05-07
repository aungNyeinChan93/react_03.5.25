import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';

const SingleProduct = () => {
    const { id: productId } = useParams();

    const getProduct = async (id) => {
        const { data: product } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return product;
    }

    const [product, setProduct] = useState();

    useEffect(() => {
        async function fetchProduct() {
            const productData = await getProduct(productId);
            setProduct(productData);
        }
        fetchProduct();
    }, [productId])


    return (
        <React.Fragment>
            <div className='grid grid-cols-3 p-10'>
                <h1 className='text-red-600 text-lg '>  {productId} : {product?.title}</h1>
                <ProductCard {...product} />
            </div>
            <Link to='/products' className='ms-10 px-4 py-2 bg-blue-600 rounded'>Back</Link>
        </React.Fragment>
    );
};

export default SingleProduct;