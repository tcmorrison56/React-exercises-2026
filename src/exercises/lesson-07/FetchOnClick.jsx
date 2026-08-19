import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  // const postId = 3;
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        type="button"
        onClick={() => {
          setError('');
          setIsLoading(true);
          setPost({});
          const postId = Math.floor(Math.random() * 10) + 1;
          getSinglePost(postId)
            .then((result) => setPost(result))
            .catch((error) => setError(`ERROR: ${error?.message}`))
            .finally(() => setIsLoading(false));
        }}
        disabled={isLoading}
      >
        Get post
      </button>
      <div className="content">
        {error && <p>{error}</p>}
        {isLoading && <h3>Loading post...</h3>}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
