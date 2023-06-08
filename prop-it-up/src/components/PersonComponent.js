import React, { Component } from 'react';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: parseInt(this.props.age),
            hair: this.props.hairColor
        }
    }
    increaseAge = () => {
        this.setState({...this.state,age:this.state.age+1})

    }
    render(){
        return(
            <div className=''>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
    
}

export default PersonComponent;