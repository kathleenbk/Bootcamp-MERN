import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className='d-flex main'>
            <div>
            <img src='https://svgsilh.com/svg/576847.svg' alt='fat-tree' className='image'/>
            </div>
            <div className='rightbox'>
                <h1 className='info'>Love your skin.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima quae beatae veritatis nulla commodi iste, delectus dolor, voluptates quo aliquam blanditiis illum eligendi quaerat sed non eveniet sit iure?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima quae beatae veritatis nulla commodi iste, delectus dolor, voluptates quo aliquam blanditiis illum eligendi quaerat sed non eveniet sit iure?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima quae beatae veritatis nulla commodi iste, delectus dolor, voluptates quo aliquam blanditiis illum eligendi quaerat sed non eveniet sit iure?</p>
                <Link to='/shop'><button className='shop'>Shop Now</button></Link><br></br>
                
            </div>
        </div>
    )
}

export default Home;