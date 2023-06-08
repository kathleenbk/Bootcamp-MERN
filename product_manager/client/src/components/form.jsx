import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Form = (props) => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const createProduct = (e) => {
        e.preventDefault();
        console.log("function is running !!!!!!!")
        const newProduct = {
            title,
            price,
            description,
        }
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then(res => {
                console.log("SUCCESS!!!!!!!!!!!!!!!!", (res.data));
                setProducts([...products, newProduct]);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        axios.delete('http://localhost:8000/api/products/delete/' + deleteId)
        .then(res => {
            console.log(res.data);
            setProducts(products.filter( (product) => product._id !== deleteId));
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={createProduct}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input name='price' type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input name='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input type='submit' value="Create" />
            </form>
            {products.map((product, index) => {
                return (
                    <div key={product._id}>
                        <li> <Link to={`/${product._id}`}>{product.title}</Link></li>
                        <button><Link to={`/${product._id}/edit`}>Edit</Link></button>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Form;