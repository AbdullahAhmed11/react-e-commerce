import React, {useEffect, useState, Fragment} from "react";
import {  useDispatch } from "react-redux";
import { addCart } from "../Redux/action";
import { NavLink, useParams } from "react-router-dom";



const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = () => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return(
            <Fragment>Loading....</Fragment>
        )
    }
    const ShowProduct = () => {
        return (
            <Fragment>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="fw-bolder lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="fw-bold my-4 display-6">$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark py-2 px-5" onClick={() => addProduct(product)}>Add to cart</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 py-2 px-3">Go to cart</NavLink>
                </div>
            </Fragment>
        )
    }
    

    return (
        <div>
            <div className="container py-5">
                <div className="row py-3">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}
export default Product;