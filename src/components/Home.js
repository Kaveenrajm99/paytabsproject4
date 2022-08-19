import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'><div className="card bg-dark text-white border-0">
            <img src="/assests/bg.jpg" className="card-img" alt="Background" height="600px" />
            <div className="card-img-overlay d-flex text-light justify-content-center">
                <div className='container'>
                    <h5 className="card-title display-3 fw-bolder md-0">NEW SEASON ARRIVED</h5>
                    <p className="card-text lead fs-3 fw-bold">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
            <Products />
        </div>
    )
}

export default Home