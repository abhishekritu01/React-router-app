
import React from "react";
import {Link ,useNavigate ,useLocation}from 'react-router-dom'





function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const ProductPage = () => {

    const navigate =useNavigate();
    const query = useQuery();

    return (
        <div>
            <h1>Product Page</h1>
            {/* <h2> {query}</h2> */}
            <h4>name = {query.get('name')}</h4>
            <h4>price = {query.get('price')}</h4>
            <h4>Address = {query.get('address')}</h4>
            <Link to='/'>Hone</Link>
            <br />
            <button onClick={()=>navigate('/products/123')}>go to product with id : 123</button>
            <button onClick={()=>navigate('/products/456')}>go to product with id : 456</button>
        </div>
    )
}

export default ProductPage;