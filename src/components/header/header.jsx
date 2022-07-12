import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex">
        <h2>Posts</h2>
        <ul className="d-flex list-unstyled ms-auto align-items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ms-2">
            <Link to="/about">About</Link>
          </li>
          <li className="ms-2">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
