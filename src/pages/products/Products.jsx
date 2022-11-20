import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import './Products.scss';

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setIsLoading(true);
        await fetch('https://dummyjson.com/products')
        .then(res1 => res1.json())
        .then(res2 => setData(res2))
        .catch(err => setError(err));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='products-page'>
            <Header/>
            <div className="container">
                {isLoading ? <div className="loading">Loading...</div> : data?.products.map(product => (
                        <ProductCard product={product} isLoading={isLoading} key={product.id}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Products;