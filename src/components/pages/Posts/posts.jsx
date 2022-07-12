import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Posts = () => {
  const [posts, setPosts] = useState({
    loading: true,
    data: [],
    error: null,
  });
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (res.ok) {
        return setPosts({
          loading: false,
          data,
          error: null,
        });
      }
      console.error({ status: res.status, message: res.statusText });
    })();
  }, []);
  return (
    <>
      {posts.data.length > 0 && (
        <ul>
          {posts.data.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}1</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
