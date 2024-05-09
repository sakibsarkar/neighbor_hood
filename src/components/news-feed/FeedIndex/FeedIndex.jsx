import Link from "next/link";
import "./feedIndex.css"

const FeedIndex = () => {
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
            //   onClick={toggleModal}
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
    </div>
  );
};

export default FeedIndex;
