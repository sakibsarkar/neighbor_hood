"use client";
import { useState } from "react";
import "./CreatePostBox.css";
import Image from "next/image";
// import profile from '../../../../assets/profile.png'

export default function CreatePostBox() {
  const [openModal, setOpenModal] = useState(true);


  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className="user-post-box-container">
        <button
          aria-live="off"
          className="sub-user-post-box-container"
          onClick={toggleModal}
        >
          <span className="parent-news-feed-user-avatar">
            <div className="news-feed-user-avatar">
              <Image
                className="news-feed-user-avatar-image"
                alt="user avatar"
                src="/kk"
                width={300}
                height={300}
              />
            </div>
          </span>
          <div className="parent-user-post-modal-container">
            <div className="child-user-post-modal-container">
              <span className="grandchild-user-post-modal-container">
                Whats on your mind, neighbor?{" "}
              </span>
            </div>
          </div>
        </button>
      </div>
      {openModal && (
        <div className="news-feed-parent-modal-container">
          <div className="news-feed-child-modal-container" tabIndex="0">
            <div className="news-feed-grandchild-modal-container">
              <span className="news-feed-great-grandchild-modal-container">
                <div className="news-feed-very-great-grandchild-modal-container">
                  {/* Header */}
                  <div className="news-feed-modal-close-submit-buttons-container">
                    <button
                      className="news-feed-post-modal-close-button"
                      onClick={toggleModal}
                    >
                      <svg
                        className="news-feed-post-modal-close-button-icon"
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
                    <div className="news-feed-post-modal-next-button-container">
                      <button
                        className="news-feed-post-modal-next-button"
                        // onClick={handleCreatePost} disabled={!body}
                      >
                        <span className="news-feed-post-modal-next-button-text">
                          Post
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form
                    className="news-feed-post-modal-body-form"
                    noValidate=""
                  >
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea
                          className="news-feed-post-modal-body-form-text-area"
                          placeholder="What's on your mind, neighbor?"
                          spellCheck="false"
                          // value={body} onChange={e => setBody(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="news-feed-post-modal-body-form-location-container">
                        <div className="news-feed-post-modal-body-form-location-add-geo-tag-container">
                          <div>
                            <div
                              className="sub-news-feed-post-modal-body-form-location-add-geo-tag-container"
                              // onClick={handleShowMap} tabIndex="-1"
                            >
                              <svg
                                className="news-feed-post-modal-body-form-add-geo-tag-icon"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                role="img"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M3 7c0-3.87 3.13-7 7-7s7 3.13 7 7c0 5.25-7 13-7 13S3 12.25 3 7Zm7 3c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3Z"
                                ></path>
                              </svg>
                              <span className="news-feed-post-modal-body-form-add-geo-tag-text">
                                Add a location
                              </span>
                            </div>

                            {/* {showMap && (
                              <div ref={mapRef} style={{ height: "200px", width: "100%" }}></div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    {/* {postPhoto !== null && ( */}
                    <button
                      className="post-box-remove-photo-button"
                      // onClick={clearImage}
                    >
                      Remove Photo
                    </button>
                    {/* // )} */}
                    {/* {preview} */}
                  </form>

                  {/* Additional buttons */}
                  <div className="news-feed-post-modal-body-form-additional-buttons-container">
                    <div className="sub-news-feed-post-modal-body-form-additional-buttons-container">
                      {/* Add Photos */}
                      <div className="news-feed-post-modal-body-form-add-photo-container">
                        <div className="sub-news-feed-post-modal-body-form-add-photo-container">
                          <div className="news-feed-post-modal-body-form-add-photo-icon-container">
                            <svg
                              className="news-feed-post-modal-body-form-add-photo-icon"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                              role="img"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 9.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                clipRule="evenodd"
                              ></path>
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v8.586l1.879-1.879a3 3 0 0 1 4.242 0l2.172 2.172a1 1 0 0 0 1.414 0l.172-.172a3 3 0 0 1 4.242 0L20 16.586V6a1 1 0 0 0-1-1H5Zm14.47 13.883-2.763-2.762a1 1 0 0 0-1.414 0l-.172.172a3 3 0 0 1-4.242 0L8.707 14.12a1 1 0 0 0-1.414 0L4 17.414V18a1 1 0 0 0 1 1h14c.17 0 .33-.042.47-.117Z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <span className="news-feed-post-modal-body-form-add-photo-text">
                            Add a photo or video
                          </span>
                        </div>
                        <label className="uploader-fileinput-label hidden">
                          {/* user load photo */}
                          <input
                            // onChange={handlePostFile}
                            className="uploader-fileinput"
                            name="13EA655A-BC56-40B6-8B41-49885FF9B443"
                            type="file"
                            multiple=""
                            accept="image/*, video/*"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
