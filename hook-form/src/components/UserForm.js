import React, { useState } from 'react';

const UserForm = () => {
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
            <div className='form-group'>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} className="form-control"/>
            </div>
            <div className='container'>
                <p>Your Form Data:</p>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th scope='row'>First Name</th>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Last Name</th>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Email</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Password</th>
                            <td>{password}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Confirm Password</th>
                            <td>{confirmPassword}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </form>
        </div>
        
    );
};

export default UserForm;