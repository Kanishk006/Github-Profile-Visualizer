"use client"; // Ensure this is a client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/global.css";

const Navbar = () => {
  const pathname = usePathname(); // ✅ Get current path

  return (
    <nav className="navbar">
      <h1 className="navbar-header">Github Profile Visualizer</h1>
      <div className="nav-links">
        <Link href="/#" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/repositories" className={pathname === "/repositories" ? "active" : ""}>
          Repositories
        </Link>
        <Link href="/analysis" className={pathname === "/analysis" ? "active" : ""}>
          Analysis
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
