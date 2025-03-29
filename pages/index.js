import { useState } from "react";
import Navbar from "../components/navbar.js";
import SearchBar from "../components/searchbar.js";
import "../styles/global.css";

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <SearchBar onSearch={() => setIsSearching(true)} />
        {!isSearching && <img src="/landingimage.png" alt="Illustration" className="image" />}
      </div>
    </div>
  );
}
