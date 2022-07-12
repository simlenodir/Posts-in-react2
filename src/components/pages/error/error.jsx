import "./error.css";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h2 className="status_num">404</h2>
      <h2 className="status_title">NOT FOUND</h2>
      <Link to="/">Back home</Link>
    </div>
  );
};
