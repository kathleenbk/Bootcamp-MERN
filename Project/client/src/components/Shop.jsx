import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div className='d-flex'>
            <div>
                <div className='filter-card'>
                    <div>
                        <h3>Filter by:</h3>
                    </div>
                    <div>
                        <input className='checkbox' type='checkbox' name='butter' />
                        <label htmlFor='butter'>Butters</label><br />
                        <input className='checkbox' type='checkbox' name='butter' />
                        <label htmlFor='butter'>Balms</label><br />
                        <input className='checkbox' type='checkbox' name='butter' />
                        <label htmlFor='butter'>Unscented</label>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap all'>
                {
                    products.map((product, id) => {
                        return (
                            <Link key={product._id} to={'/shop/' + product._id} className='product-link'>
                            <div className='product-card'>
                                <img src={product.image} alt='Product' className='product-image' />
                                <p className='product-name'>{product.name}</p>
                                <div className='d-flex justify-content-between product-info'>
                                    <p>{product.weight}oz</p>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                            </Link>

                        )
                    })
                }



            </div>
        </div>

    )
}

export default Shop