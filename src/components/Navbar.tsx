"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {

  const pathname = usePathname();
  const [menuOpen,setMenuOpen] = useState(false);
  const [productOpen,setProductOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="container">

        {/* LOGO LEFT */}

        <Link href="/" className="logo">
          VSS Granulation
        </Link>


        {/* HAMBURGER */}

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* NAV LINKS RIGHT */}

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link
            href="/"
            className={`nav-link ${pathname==="/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`nav-link ${pathname==="/about" ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>


          {/* PRODUCTS */}

          <div className="dropdown">

            <span
              className="nav-link"
              onClick={()=>setProductOpen(!productOpen)}
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
            className={`nav-link ${pathname==="/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}