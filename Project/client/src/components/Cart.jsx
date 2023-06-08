import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    let cart = localStorage.getItem("cart")

    let cartArray = cart ? cart.split(" ") : []

    function filterFunc(product) {
        return cartArray.includes(product._id)
    }

    let filteredCart = products.filter(filterFunc) ? products.filter(filterFunc) : []

    let total = 0

    

    let count = 0;

    let clear = () => {
        localStorage.removeItem("cart");
        window.location.reload(false);
    }

    



    return (
        <div className='checkout'>
            <div className='cart-container'>
                <h3 className='your-cart'>Your Cart:</h3>
                <p>FREE SHIPPING ON ORDERS ABOVE $70.00</p>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Product Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filteredCart.length > 0 && 
                            filteredCart.map((item, id) => {
                                
                                
                                return (
                                    <tr key={item._id}>
                                        <td className='d-flex'><img src={item.image} alt="Product" className='mini-image' /><p className='item-name'>{item.name} | {item.weight}oz</p></td>

                                        <td>{cartArray.forEach(element => {
                                            if (element === item._id) {
                                                count += 1
                                            };
                                        })}<p className='item-name'>{count}</p></td>
                                        <td><p className='item-name'>${(item.price) * count}</p></td>



                                    </tr>

                                )
                            })}
                    </tbody>
                    
                </table>
                <button onClick={clear}>Clear Cart</button>

                

            </div>
            <div className='cart-container'>
                <p>Merchandise Subtotal: <span className='totals'>$</span></p>
                <p>Estimated Shipping: <span className='totals'>TBD</span></p>
                <p>Estimated Tax: <span className='totals'>TBD</span></p>
                <h4 className='mt-3'>Estimated Total: $</h4>
                <input className='mt-2' placeholder='Enter Promo Code'/>
            </div>



        </div>

    )
}

export default Cart