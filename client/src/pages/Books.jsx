import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './book.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/yourtablename");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/yourtablename/${id}`);
            alert("deleted")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h2 class="text-center">Library CRUD Project</h2>
            <div className="card-container">
                {books.map((book) => (
                    <div key={book.id} className="card" style={{ width: '18rem' }}>
                         <img src={book.cover} className="card-img-top" alt="Book Cover" />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.description}</p>
                            <button onClick={() => handleDelete(book.id)} className="btn btn-danger">
                                Delete
                            </button>
                            <button id='btn1' className="btn btn-warning">
                                <Link to={`/update/${book.id}`}>Update the book</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-danger center">
                <Link to={`/Add`}>Add A book</Link>
            </button>
        </>
    );
};

export default Books;
