"use client";
import { useState } from "react";

function LotusLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Center petal */}
      <path
        d="M14 3C13.2 7 12.3 11 13.2 15C13.6 17 13.8 18.5 14 20C14.2 18.5 14.4 17 14.8 15C15.7 11 14.8 7 14 3Z"
        fill="#3f6145"
      />
      {/* Left petal */}
      <path
        d="M14 20C11.5 17 8.5 14 7.5 10C6.8 7.2 7.8 5 9.8 5.5C11.5 6 13.2 10 14 15L14 20Z"
        fill="#3f6145"
        fillOpacity="0.55"
      />
      {/* Right petal */}
      <path
        d="M14 20C16.5 17 19.5 14 20.5 10C21.2 7.2 20.2 5 18.2 5.5C16.5 6 14.8 10 14 15L14 20Z"
        fill="#3f6145"
        fillOpacity="0.55"
      />
      {/* Stem */}
      <path
        d="M14 20L14 25"
        stroke="#3f6145"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Water ripple */}
      <path
        d="M9 25Q11.5 23.5 14 25Q16.5 23.5 19 25"
        stroke="#3f6145"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="brand">
          <LotusLogo />
          Inar Ventures
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4L16 16M4 16L16 4"
                stroke="#18181b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="#18181b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <nav className={`nav-links${open ? " nav-open" : ""}`}>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/teachers" onClick={() => setOpen(false)}>Our Network</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/yoga-professionals" className="nav-cta" onClick={() => setOpen(false)}>
            Apply to Join
          </a>
        </nav>
      </div>
    </header>
  );
}
