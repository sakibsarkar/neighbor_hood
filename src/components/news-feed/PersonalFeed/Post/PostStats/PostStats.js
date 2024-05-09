"use client";
import React, { useState } from "react";
import PostComments from "./PostComments/PostComments";
import "./PostStats.css";
import HeartIcon from "../../../../../icon/HeartIcon";
import CommentIcon from "../../../../../icon/CommentIcon";
import ShareIcon from "../../../../../icon/shareIcon";

export default function PostStats({ post }) {
  // const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  // const postLikes = useSelector(getPostLikes(post))
  // const sessionUserLike = postLikes.find(like => sessionUser?.id === like.likerId) ? postLikes.find(like => sessionUser?.id === like.likerId) : false

  // this is used to render the comments which is nested below and in further directories
  const { comments, postLikes } = post;

  // used to set the like button to red

  const [isLiked, setIsLiked] = useState(false);

  // Like.create!( liker: user2, likeable_id: post2.id, likeable_type: :Post )

  const handleLikeClick = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  // share menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShareClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // display comments

  const [showComments, setShowComments] = useState(false);

  const handleCommentsClick = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      {/* <!-- poststats --> */}
      <div className="parent-news-feed-posts-stats-container">
        <div className="child-news-feed-posts-stats-container">
          <div className="grandchild-news-feed-posts-stats-container">
            {/* <!-- likes count--> */}
            <div className="parent-news-feed-posts-stats-count-container">
              <div className="child-news-feed-posts-stats-count-container">
                <p className="news-feed-live-post-stats-count">
                  {postLikes} Likes
                </p>
              </div>
            </div>
            {/* <!-- comments - likes - share --> */}
            <div className="news-feed-post-comment-like-share-container">
              {/* like */}
              <div
                className="news-feed-post-like-container"
                onClick={handleLikeClick}
              >
                <button className="news-feed-post-like-button">
                  <HeartIcon isLiked={isLiked} />
                  <div className="news-feed-post-like-button-title-container">
                    <div className="news-feed-post-like-button-title">Like</div>
                  </div>
                </button>
              </div>
            </div>
            {/* comment */}
            <div
              className="news-feed-post-comment-like-share-container"
              onClick={handleCommentsClick}
            >
              <div className="news-feed-post-like-container">
                <button
                  aria-live="off"
                  aria-label="Like"
                  data-testid="reaction-button"
                  type="button"
                  className="news-feed-post-like-button"
                >
                  <CommentIcon />
                  <div className="news-feed-post-like-button-title-container">
                    <div
                      className="news-feed-post-like-button-title"
                      data-testid="reaction-button-text"
                    >
                      {post.commentsNum} Comments
                    </div>
                  </div>
                </button>
              </div>
            </div>
            {/* share */}
            <div className="news-feed-post-comment-like-share-container">
              <div className="news-feed-post-like-container">
                <button
                  aria-live="off"
                  aria-label="Like"
                  data-testid="reaction-button"
                  type="button"
                  className="news-feed-post-like-button"
                >
                  <div className="" onClick={handleShareClick}>
                    <ShareIcon />
                  </div>
                  <div className="news-feed-post-like-button-title-container">
                    <div
                      onClick={handleShareClick}
                      className="news-feed-post-like-button-title"
                      data-testid="reaction-button-text"
                    >
                      Share
                    </div>
                    {isMenuOpen && (
                      <div className="news-feed-post-share-menu">
                        <button>
                          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.neighborhoodnode.com/">
                            <img
                              className="news-feed-social-share-company-logo"
                              src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9c885269569db3947bfe.svg"
                              alt="facebook"
                            />
                          </a>
                          <script
                            async
                            src="https://platform.twitter.com/widgets.js"
                          ></script>
                        </button>
                        <button>
                          <a href="https://twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw">
                            <img
                              className="news-feed-social-share-company-logo"
                              src="https://www.vhv.rs/dpng/d/146-1461722_twitter-circle-twitter-logo-png-transparent-png.png"
                              alt="twitter"
                            />
                          </a>
                          <script
                            async
                            src="https://platform.twitter.com/widgets.js"
                          ></script>
                        </button>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="post-stats-and-comments-seperator"></hr>

      {/* Conditionally render post comments */}
      {showComments &&
        post.comments &&
        Object.keys(post.comments).length > 0 &&
        Object.values(comments).map((comment) => (
          <div
            className="parent-news-feed-comment-user-info-container"
            key={comment.id}
          >
            <PostComments comment={comment} />
          </div>
        ))}
    </>
  );
}
