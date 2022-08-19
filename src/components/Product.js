import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());

        }
        getProduct();
    }, [])

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height='400px' width='400px' />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $: {product.price}
                    </h3>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <NavLink to='/products' className={'btn btn-outline-dark'}>Go Back</NavLink>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <ShowProduct />
                </div>
            </div>
        </div>
    )
}

export default Product