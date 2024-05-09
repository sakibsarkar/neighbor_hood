"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./index.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [showPopout, setShowPopout] = useState(false);

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
  };

  // Avatar popout
  const handleAvatarClick = () => {
    setShowPopout(true);
  };

  const handlePopoutClose = () => {
    setShowPopout(false);
  };

  return (
    <>
      <div className="news-feed-navbar-container">
        <div className="logo">
          <Link href="/news_feed" className="news-feed-nav-bar-logo">
            <Image
              width={230}
              height={25}
              src={"/images/text_logo.png"}
              className="new-feed-neighborhood-node-logo"
              alt="Neighborhood Node logo"
            />
          </Link>
        </div>

        <span
          className="nav-parent-news-feed-user-avatar"
          onClick={handleAvatarClick}
        >
          <div className="nav-news-feed-user-avatar">
            <Image
              width={40}
              height={40}
              className="nav-news-feed-user-avatar-image"
              alt="user avatar"
              src={"/images/profile.png"}
            />
          </div>
        </span>
      </div>
      {showPopout && (
        <div className="nav-parent-news-feed-user-popout-container">
          <div className="nav-news-feed-user-popout-content">
            <Image
              width={80}
              height={80}
              className="nav-news-feed-user-popout-avatar-image"
              alt="user avatar"
              src={"/images/profile.png"}
            />

            <div className="nav-news-feed-user-popout-name">Guest</div>
            <button
              className="nav-news-feed-user-popout-signout-button"
              onClick={logout}
            >
              <svg
                className="css-1rmfb3p"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
              >
                <path
                  fill="currentColor"
                  d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.25a1 1 0 1 0-2 0V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.25a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3H7Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M17.293 14.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L18.586 11H11a1 1 0 1 0 0 2h7.586l-1.293 1.293Z"
                ></path>
              </svg>
            </button>
            <button
              className="nav-news-feed-user-popout-close-button"
              onClick={handlePopoutClose}
            >
              <svg
                className="nav-news-feed-user-popout-close-button-icon"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M17.707 6.293a1 1 0 0 1 0 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586l4.293-4.293a1 1 0 0 1 1.414 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
