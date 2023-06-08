import React, { useState } from 'react';

const Tabs = (props) => {
    //setting default as tab 2 like the wireframe
    const [selected, setSelected] = useState(1);
    console.log(props);
    return (
        <div className='main-container'>
            <div className='header'>
                {props.tabsArray.map((tab, i) => {
                    return <div key={i} className='box' onClick={(e) => {
                        setSelected(i);
                    }} style={{
                        backgroundColor: selected == i ? 'black':'',
                        color: selected == i ? 'white':''
                    }}><h3 className='text'>{tab.tabName}</h3></div>
                })}
            </div>
            <div className='content'>
                <p>{props.tabsArray[selected].tabContent}</p>

            </div>
        </div>
    )
};

export default Tabs;