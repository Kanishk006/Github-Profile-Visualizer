import React from "react";
import "../../../styles/repoclick.css";
import Navbar from "../../../components/navbar";

const RepoDetails = () => {
  const repo = {
    name: "Netflix Clone",
    description:
      "To create a nested list using the web editor on GitHub or a text editor that uses a monospaced font, like Atom, you can align your list visually.",
    stars: 3,
    forks: 0,
    commits: 34,
    issues: 0,
    contributors: [
      "/image.png",
      "/image.png",
      "/image.png",
      "/image.png",
      "/image.png",
    ],
    moreContributors: 20,
    languages: [
      { name: "Java Script", color: "#10b981" },
      { name: "Objective C", color: "#3b82f6" },
      { name: "Java", color: "#facc15" },
      { name: "Type Script", color: "#ec4899" },
      { name: "Dart", color: "#a78bfa" },
    ],
  };

  return (
    <><Navbar/>
    <div className="repo-details-container">
      <h1 className="repo-title">{repo.name}</h1>
      <p className="repo-description">{repo.description}</p>

      {/* Language Badges */}
      <div className="repo-languages">
        {repo.languages.map((lang, index) => (
          <span key={index} className="language" style={{ backgroundColor: lang.color }}>
            {lang.name}
          </span>
        ))}
      </div>

      {/* Stats Section */}
      <div className="repo-stats">
        <span>⭐ {repo.stars}</span>
        <span>🍴 {repo.forks}</span>
      </div>

      {/* Commits & Issues */}
      <div className="repo-metrics">
        <div className="metric-card">
          <h3>Commits Count</h3>
          <p>{repo.commits}</p>
        </div>
        <div className="metric-card">
          <h3>Issues Count</h3>
          <p>{repo.issues.toString().padStart(2, "0")}</p>
        </div>
      </div>

      {/* Contributors */}
      <div className="contributors">
        <h3>Contributors :</h3>
        <p>{repo.contributors.length + repo.moreContributors} Members</p>
        <div className="contributors-list">
          {repo.contributors.map((avatar, index) => (
            <img key={index} src={avatar} alt="Contributor" className="contributor-avatar" />
          ))}
          <span className="more-contributors">+{repo.moreContributors}</span>
        </div>
      </div>

      {/* Languages Pie Chart */}
      <div className="languages">
        <h3>Languages :</h3>
        <div className="donut-chart">
          <div className="chart"></div>
          <ul className="legend">
            {repo.languages.map((lang, index) => (
              <li key={index}>
                <span className="legend-color" style={{ backgroundColor: lang.color }}></span>
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default RepoDetails;
