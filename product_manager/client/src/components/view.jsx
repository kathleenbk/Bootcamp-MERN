import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


const View = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        axios.delete('http://localhost:8000/api/products/delete/' + deleteId)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
            <button><Link to={`/${product._id}/edit`}>Edit</Link></button>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default View;