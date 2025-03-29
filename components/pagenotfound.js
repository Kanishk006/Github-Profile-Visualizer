import { Link } from "react-router-dom";
import "../styles/pagenotfound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img src="/images/404-illustration.png" alt="404 Not Found" className="notfound-image" />
        <h1>PAGE NOT FOUND</h1>
        <p>We're sorry, the page you requested could not be found</p>
        <p>Please go back to the homepage</p>
        <Link to="/" className="notfound-button">Go to Home</Link>
      </div>
    </div>
  );
}
