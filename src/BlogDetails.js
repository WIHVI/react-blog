import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);

  return (
    <div className="blog-details">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="loading">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by Lorem Ipsum</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
