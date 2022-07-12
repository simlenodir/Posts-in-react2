import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.ok) {
        return setPost(await res.json());
      }
    })();
  }, [id]);
  const handleBack = (evt) => {
    if (evt.keyCode === 8) {
      navigate(-1);
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", handleBack);
    return () => {
      window.removeEventListener("keyup", handleBack);
    };
  }, []);

  return (
    <div className="container">
      <h1>Sngle Page </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="btn btn-success" onClick={() => navigate("/posts")}>
        back
      </button>
    </div>
  );
};
