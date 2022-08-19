import { useState, useEffect } from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {


            setLoading(true);
            const response = await fetch('https://rjcollection.herokuapp.com/catalog');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
                console.log(response)


                return () => {
                    componentMounted = false
                }


            }
        }
        getProducts();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                    <NavLink to={'/additems'} className="btn btn-outline-dark me-2" >Add Items</NavLink>
                </div>
                {filter.map((products) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={products.id} >
                                    <img src={products.image} class="card-img-top" alt={products.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0 ">{products.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">${products.price}</p>
                                        <NavLink to={`/products/${products.id}`} class="btn btn-outline-dark">View Item</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-4 py-4">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Items</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products