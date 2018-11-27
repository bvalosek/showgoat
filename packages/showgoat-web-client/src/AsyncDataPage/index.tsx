import React from 'react';
import useFetch from '../hooks/useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default () => {
  const [posts, loading, error] = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <ul>
      {posts && posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
