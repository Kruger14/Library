import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './update.css';

const Update = () => {
  const [books, setBooks] = useState({
    title: '',
    description: '',
    cover: '',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const bookId = location.pathname.split( '/')[2];
  const id = parseInt(bookId,10)
  

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/yourtablename/${id}`, books);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 class="text-center">Update A BooK</h2>
      <div id='container'>
        <input type="text" placeholder="Title" name="title" onChange={handleChange} /><br />
        <input type="text" placeholder="Description" name="description" onChange={handleChange} /><br />
        <input type="text" placeholder="Cover" name="cover" onChange={handleChange} /><br />
      <button onClick={handleClick}>Update</button>
      <button><Link to="/">Go to Library page</Link></button>
      </div>
    </>
  );
};

export default Update;
