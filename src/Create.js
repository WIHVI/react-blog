import React from 'react';
import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Lorem Ipsum');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    alert(JSON.stringify(blog, "", 2));
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="lorem-ipsum">Lorem Ipsum</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
