import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="loading">{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
