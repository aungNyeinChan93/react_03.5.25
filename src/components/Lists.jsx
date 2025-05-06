import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleList from './SingleList';

const fetchProducts = async () => {
    const { data: products } = await axios.get('https://fakestoreapi.com/products');
    return products;
}

const Lists = () => {
    const [state, setState] = useState({
        products: []
    })
    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setState(pre => ({ ...pre, products }));
        }
        getProducts();
    }, [])

    return (
        <React.Fragment>
            <section className='grid grid-cols-3 gap-8 h-screen mx-10'>
                {
                    state.products.map(product => {
                        return <SingleList key={product.id} {...product} product={product} />
                    })
                }
            </section>
        </React.Fragment>
    );
};

export default Lists;