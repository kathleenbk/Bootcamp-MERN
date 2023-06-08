import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";



const Edit = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        const updatedProduct = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:8000/api/products/update/${id}`, updatedProduct)
        .then(res => {
            console.log(res.data);
            navigate('/')

        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input name='price' type='number' onChange={(e) => setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <input type='submit' value="Update" />
            </form>

        </div>
    )
}

export default Edit;