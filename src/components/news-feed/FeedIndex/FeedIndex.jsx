'use client'
import Link from "next/link";
import "./feedIndex.css";
import Image from "next/image";
import ModalPOst from "../PersonalFeed/shared/ModalPOst";
import { useState } from "react";

const FeedIndex = () => {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <div className="news-feed-index">
        <div className="news-feed-index-list">
          <li className="news-feed-index-list-item">
            <Link
              className="news-feed-index-list-item-container"
              href="/news_feed"
            >
              <svg className="news-feed-index-list-item-icon">
                <path
                  fill="currentColor"
                  d="M16.669 4.257a1 1 0 0 0-1.338 0l-10 9A1 1 0 0 0 5 14v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h6v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V14a1 1 0 0 0-.331-.743l-10-9Z"
                ></path>
              </svg>
              <span
                className="news-feed-index-list-item-title"
                data-testid="Home"
              >
                Home
              </span>
            </Link>
          </li>
          <div className="news-feed-index-post-button-container">
            <button
              className="news-feed-index-post-button"
              onClick={toggleModal}
            >
              <span className="news-feed-index-post-button-content">
                <svg
                  className="news-feed-index-post-button-symbol"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4Z"
                  ></path>
                </svg>
                Post
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="news-feed-index-footer-menue-container">
        <footer
          className="news-feed-index-footer"
          tabIndex="0"
          aria-label="Footer"
        >
          <div className="news-feed-index-copyright-container">
            <div className="news-feed-footer-copyright">
              © 2023 Neighborhood Node
            </div>
            <div className="linkedin-logo">
              <a
                href="https://www.linkedin.com/in/christopher-banas/"
                className="news-feed-nav-bar-linkedin-logo"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/linkedin.png"
                  className="new-feed-neighborhood-node-likedin-logo"
                  alt="LinkedIn logo"
                />
              </a>
            </div>
            <div className="github-logo">
              <a
                href="https://github.com/chrisbanas/neighborhood_node"
                className="news-feed-nav-bar-github-logo"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/github.png"
                  className="new-feed-neighborhood-node-github-logo"
                  alt="Github logo"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {openModal && (
        <ModalPOst toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default FeedIndex;
