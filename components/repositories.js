import { useEffect, useState } from "react";
import "../styles/repositories.css";
import RepoDetails from "@/app/repoclick/page";
import Link from "next/link";
import LoadingPage from "./loading";


export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null); // ✅ State for selected repo

  useEffect(() => {
    fetch("/api/repo") // 🔥 Update this URL to match your API endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage/>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="repositories-container">
      <h1>Repositories</h1>

      {selectedRepo ? ( // ✅ Render RepoDetails when a repo is clicked
        <RepoDetails/>
      ) : (
        repos.map((repo, index) => (
          <Link href="/repoclick" key={index}>
          <div
            key={repo.name}
            className="repo-card"
            onClick={() => setSelectedRepo(repo)} // ✅ Set selected repo
          >
            <h2 className="repo-title">{repo.name}</h2>
            <p className="repo-description">{repo.description}</p>

            {/* Languages */}
            <div className="repo-languages">
              {repo.languages.map((lang, i) => (
                <span key={i} className="language">{lang}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="repo-stats">
              <span>⭐ {repo.stars}</span>
              <span>🍴 {repo.forks}</span>
            </div>
          </div>
          </Link>
        ))
      )}
    </div>
  );
}
