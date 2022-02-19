import React, {useState, useEffect, Fragment} from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false);
    let componentMount = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            if(componentMount) {
                setData(await res.clone().json());
                setFilter(await res.json())
                setLoading(false)
                console.log(filter)
            }
            return  () => {
                componentMount = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <Fragment>
                <div>...loading</div>
            </Fragment>
        )
    };
    const filterProducts = (cat) => {
        const uppdateList = data.filter((x) => x.category === cat);
        setFilter(uppdateList)
    }
    const ShowProducts = () => {
        return (
            <Fragment>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>Electronics</button>
            </div>
            {filter.map((product) => {
                return (
                    <>
                    <div className="col-md-3">
                    <div className="card text-center p-4" key={product.id} >
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                      <h5 className="card-title">{product.title.substring(0,12)}</h5>
                      <p className="card-text fw-bold lead">${product.price}</p>
                      <NavLink to={`products/${product.id}`} className="btn btn-outline-dark ">BY NOW</NavLink>
                    </div>
                  </div>
                    </div> 
                    </>
                )
            })}
            </Fragment>
        )
    }




    return (
    <div className="">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest products</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
            {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
    )
}
export default Products