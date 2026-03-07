"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">

        <Link href="/" className="nav-logo">
          VSS Granulation
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link href="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}