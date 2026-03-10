"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import "../styles/navbar.css";

export default function Navbar() {

  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const searchData = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Crumb Rubber", path: "/products/crumb-rubber" },
    { name: "EPDM Granules", path: "/products/epdm-granules" },
    { name: "Tyre Wire", path: "/products/tyre-wire" }
  ];

  const handleSearch = (value: string) => {

    setQuery(value);

    if (value === "") {
      setResults([]);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleSelect = (path: string) => {
    setQuery("");
    setResults([]);
    router.push(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="container">

        {/* LOGO */}
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="logo" className="logoimg"/>
        </Link>


        {/* SEARCH */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Search products or pages..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <FiSearch className="search-icon" />

          {results.length > 0 && (

            <div className="search-results">

              {results.map((item, index) => (

                <div
                  key={index}
                  className="search-item"
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </div>

              ))}

            </div>

          )}

        </div>


        {/* HAMBURGER */}

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* NAV LINKS */}

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>


          <div className="dropdown">

            <span
              className="nav-link"
              onClick={() => setProductOpen(!productOpen)}
            >
              Products ▾
            </span>

            <div className={`dropdown-menu ${productOpen ? "show" : ""}`}>

              <Link
                href="/products/crumb-rubber"
                className="dropdown-item"
                onClick={closeMenu}
              >
                Crumb Rubber
              </Link>

              <Link
                href="/products/epdm-granules"
                className="dropdown-item"
                onClick={closeMenu}
              >
                EPDM Granules
              </Link>

              <Link
                href="/products/tyre-wire"
                className="dropdown-item"
                onClick={closeMenu}
              >
                Tyre Wire
              </Link>

            </div>

          </div>

          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}