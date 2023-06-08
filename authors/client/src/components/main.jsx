import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteAuthor = (deleteId) => {
        axios.delete('http://localhost:8000/api/authors/' + deleteId)
            .then((res) => {
                console.log(res.data);
                setAuthors(authors.filter((author) => author._id !== deleteId));
            })
            .catch((err) => console.log(err))
    }


    


    return (
        <div className='tablecontainer'>
            <Link to='/create'>Add an author</Link>
            <h3>We have quotes by:</h3>
            <table className='table table-bordered table-striped'>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {
                    authors.sort((a, b) => a.name.localeCompare(b.name)).map((author) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><button className='action1'><Link to={'/' + author._id}>Edit</Link></button><button onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Main;