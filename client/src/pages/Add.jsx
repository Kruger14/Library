import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './add.css';

const Add = () => {
  const [books,setBooks] = useState({
    title: "",
    description: "",
    cover: ""
  });

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

  const handlecheck = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/yourtablename", books)
      alert("Book successfully added go to library to see")
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <h2 class="text-center">Add A BooK</h2>
    <div id='container'>
      <input type='text' placeholder='Title' name='title'  onChange={handleChange} /><br/>
      <input type='text' placeholder='Description' name='description' onChange={handleChange}/><br/>
      <input type='text' placeholder='cover' name='cover' onChange={handleChange} /><br/>
      <button onClick={handlecheck}>ADD</button>
      <button><Link to={'/'}>Go to Books</Link></button>
    </div>
    </>
  )
}

export default Add;