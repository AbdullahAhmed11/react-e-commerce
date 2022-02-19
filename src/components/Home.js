import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img src="/assets/about-bg.jpg" className="card-img" alt="..." height="550px" />
            <div className="container card-img-overlay d-flex flex-column justify-content-center ">
            <div classNameName=''>
                <h5 className="card-title display-3 mb-0 fw-bold">NEW COLLECTION SOON</h5>
                <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
            </div>
            </div>
        </div>
      <Products/>
      </div>
  )
}

export default Home