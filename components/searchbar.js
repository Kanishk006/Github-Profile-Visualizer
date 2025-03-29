import { useState } from "react";
import "../styles/userdetails.css";
import ErrorPage from "./errorpage";
import LoadingPage from "./loading"; // Import the loading page component

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setUserData(null);

      // Notify parent to hide landing image
      onSearch();

      const response = await fetch(`/api/search?username=${encodeURIComponent(username)}`);
      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        setError(data.message || "User not found");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button 
          className="search-button" 
          onClick={handleSearch} 
          disabled={loading}
        >
          🔍
        </button>
      </div>

      {/* Show Loading Page while fetching data */}
      {loading && <LoadingPage />}

      {/* Display Error Message */} 
      {error && <ErrorPage />}

      {/* Display User Data */}
      {userData && !loading && (
        <div className="profile-container">
          <h2 className="profile-name">{userData.name}</h2>
          <p className="profile-username">{userData.login}</p>
          <p className="profile-bio">{userData.bio}</p>

          {/* Stats Section */}
          <div className="profile-stats">
            <div className="stat">
              <p className="stat-value">{userData.followers.toLocaleString()}</p>
              <p className="stat-label">FOLLOWERS</p>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <p className="stat-value">{userData.following}</p>
              <p className="stat-label">FOLLOWING</p>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <p className="stat-value">{userData.public_repos}</p>
              <p className="stat-label">PUBLIC REPOS</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Company</span>
              <span className="info-value">🏢 {userData.company || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Company Url</span>
              <span className="info-value">
                🔗 <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog || "N/A"}</a>
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">📍 {userData.location || "Not Available"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
