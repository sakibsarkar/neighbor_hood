'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createComment } from "../../../../../store/comments";
import "./PostCommentsBox.css";
import Image from "next/image";
// import profile from '../../../../../assets/profile.png'

export default function PostCommentsBox({post}) {

  const [isExpanded, setIsExpanded] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };


  // create a comment
  // const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [authorId] = useState(null);


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      body: body,
      authorId: authorId,
      postId: post.id
    };
    // dispatch(createComment(comment))
    setBody(""); // clear the textarea after submitting the form
  };

  const handleCreateComment = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    handleButtonClick(); // call toggleModal first
    handleCommentSubmit(e); // then call handleCommentSubmit
  }


  return (
    <>
      <div>
        <button className="sub-user-comment-box-container" onClick={handleButtonClick}>
          <span className="parent-news-feed-comment-user-avatar">
            <div className="news-feed-comment-user-avatar">
            {/* {sessionUser && ( */}
              <Image 
              width={400} height={400} className="news-feed-comment-user-avatar-image" alt="user avatar" src="/images/profile-icon-9.png" />
              {/* )} */}
            </div>
          </span>
          <div className="parent-user-comment-modal-container">
            <div className="child-user-comment-modal-container">
              <input type="text" className="grandchild-user-comment-modal-container" placeholder="Add a comment..." value={body} onChange={e => setBody(e.target.value)} required/>
            </div>
          </div>
        </button>
        {isExpanded && (
          <div className="comment-buttons-container">
            <div className="news-feed-post-comment-composer-action-bar-container">
              <div className="news-feed-post-comment-composer-action-bar-container-contents">
                <div className="news-feed-post-comment-add-photo-and-location-buttons-container">
                </div>

                {/* Comment submit */}
                <div className="news-feed-post-comment-submit-button-container">
                  <button className="news-feed-post-comment-submit-button" onClick={handleCreateComment}>
                    <span className="news-feed-post-comment-submit-button-text-container">
                      <span className="news-feed-post-comment-submit-button-text">Comment</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
