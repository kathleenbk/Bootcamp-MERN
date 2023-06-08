import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    };
    

    return (
        <div className='container'>
        <form onSubmit={ createUser } >
            <div className='form-group'>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } className="form-control"/>
            </div>
            {firstName.length < 2 && firstName.length > 0 ? <p>First Name must be at least 2 characters</p> : null}
            <div className='form-group'>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} className="form-control"/>
            </div>
            {lastName.length < 2 && lastName.length > 0 ? <p>Last Name must be at least 2 characters</p> : null}
            <div className='form-group'>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} className="form-control"/>
            </div>
            {email.length < 2 && email.length > 0 ? <p>Email must be at least 2 characters</p> : null}
            <div className='form-group'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} className="form-control"/>
            </div>
            {password.length < 8 && password.length > 0 ? <p>Password must be at least 8 characters</p> : null}
            {confirmPassword !== password ? <p>Passwords must match.</p> : null}
            <div className='form-group'>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} className="form-control"/>
            </div>
        </form>
        </div>
        
    );
};

export default UserForm;