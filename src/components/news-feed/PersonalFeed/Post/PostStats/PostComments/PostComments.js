"use client"
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteComment, updateComment } from "../../../../../../store/comments";
import PostCommentsStats from "./PostCommentsStats/PostCommentsStats";
import "./PostComments.css";
// import profile from '../../../../../../assets/profile.png'

export default function PostComments({ comment }) {

  // const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);

  // For the user info popup
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  // For the edit / delete dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [body, setBody] = useState("");
  const [authorId] = useState(null);
  const commentId = comment.id
  const postId = comment.postId

  // Pre pops the comment with the previous body

  useEffect(() => {
    setBody(comment.body);
  }, [comment.body]);


  // Edit Comment

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: commentId,
      body: body,
      authorId: authorId,
      postId: postId
    };
    // dispatch(updateComment(comment))
    setBody(""); // clear the textarea after submitting the form
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    toggleModal(); // call toggleModal first
    handleCommentSubmit(e); // then call handlePostSubmit
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteComment(comment.id))
  };



  // Modal for Edit Post

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };


  return (

    <>

      <div className="child-news-feed-comment-user-info-container">
        <div className="grandchild-news-feed-comment-user-info-container">
          {/* <!-- user avatar --> */}
          <div className="comment-owner-avatar-container" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span className="comment-news-feed-owner-avatar" >
              <div className="comment-news-feed-owner-avatar-image">
                <img
                  className="news-feed-user-avatar-image" alt="user avatar" src={comment.userPhoto} />
              </div>
            </span>
          </div>
          {/* <!-- user info --> */}
          <div className="news-feed-comment-owner-name-container">
            <a className="news-feed-comment-owner-name" href="/news_feed">
              {comment.authorFirstName}&nbsp;{comment.authorLastName}
            </a>
          </div>
          <div className="news-feed-comment-neighborhood-name-container">
            <a className="news-feed-comment-neighborhood-name" href="/news_feed">
              {comment.neighborhoodName}
            </a>
          </div>
          {/* <!-- popup --> */}
          {showPopup && (
            <div className="news-feed-comment-user-profile-popup">
              <div className="sub-news-feed-comment-user-profile-popup">
                <img className="popup-news-feed-comment-user-avatar-image" alt="user avatar" src={comment.userPhoto ? comment.userPhoto : profile} />
                <div className="popup-news-feed-comment-user-info-container">
                  <div className="popup-news-feed-comment-user-name">
                    {comment.authorFirstName}&nbsp;{comment.authorLastName}
                  </div>
                  <div className="popup-news-feed-comment-neighborhood-name">
                    {comment.neighborhoodName}
                  </div>
                </div>
              </div>
              <div className="popup-news-feed-comment-user-bio-container">
                <p className="popup-news-feed-comment-user-bio">{comment.authorBio}</p>
              </div>
            </div>
          )}
        </div>
        {/* <!-- Edit / delete dropdown --> */}
        {(
          <div className="news-feed-comment-delete-edit-dropdown-container">
            <div className="sub-news-feed-comment-delete-edit-dropdown-container" onClick={handleDropdownClick}>
              <svg className="news-feed-comment-delete-edit-dropdown-icon" width="24" height="24" viewBox="0 0 24 24" role="img">
                <path fill="currentColor" d="M5.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
              </svg>
              {dropdownVisible && (
                <div className="news-feed-comment-delete-edit-dropdown-menu-container">
                  <div className="news-feed-comment-delete-edit-dropdown-menu">
                    <div className="news-feed-comment-delete-edit-dropdown-item" onClick={toggleModal}>
                      Edit Comment
                    </div>
                    <div className="news-feed-comment-delete-edit-dropdown-item" onClick={handleDeleteClick}>
                      Delete Comment
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <p>{comment.body}</p>


      <PostCommentsStats comment={comment} />



      {/* Modal for edit comment*/}
      {isModalVisible && (
        <div className="news-feed-parent-modal-container">

          <div className="news-feed-child-modal-container" tabIndex="0">
            <div className="news-feed-grandchild-modal-container">
              <span className="news-feed-great-grandchild-modal-container">
                <div className="news-feed-very-great-grandchild-modal-container">

                  {/* Header */}
                  <div className="news-feed-modal-close-submit-buttons-container">
                    <button className="news-feed-post-modal-close-button" onClick={toggleModal}>
                      <svg className="news-feed-post-modal-close-button-icon" viewBox="0 0 24 24"
                        role="img">
                        <path fill="currentColor" fillRule="evenodd"
                          d="M17.707 6.293a1 1 0 0 1 0 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586l4.293-4.293a1 1 0 0 1 1.414 0Z"
                          clipRule="evenodd">
                        </path>
                      </svg>
                    </button>
                    <div className="news-feed-post-modal-next-button-container">
                      <button className="news-feed-post-modal-next-button" onClick={handleEditComment} disabled={!body}>
                        <span className="news-feed-post-modal-next-button-text">Edit</span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form className="news-feed-post-modal-body-form" noValidate="">
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea className="news-feed-post-modal-body-form-text-area" placeholder={comment.body} spellCheck="false" value={body} onChange={e => setBody(e.target.value)} required>
                        {comment.body}</textarea>
                      </div>
                    </div>
                  </form>

                  {/* Additional buttons */}
                  <div className="news-feed-post-modal-body-form-additional-buttons-container">
                    <div className="sub-news-feed-post-modal-body-form-additional-buttons-container">
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>

        </div>
      )}



    </>

  )

}
