import React from 'react'
import image1 from './Capture.PNG'
import image2 from './Capture2.PNG'

const About = () => {
    return (
        <div className='main about'>
            <h1>Handmade in Long Island, NY</h1>
            <h3>Women owned and operated</h3>
            <div className='images-container'>
                <img src={image1} alt='sheabutter' className='home-images'/>
                <img src={image2} alt='sheabutter' className='home-images'/>
                </div>

        </div>
    )
}

export default About