"use client";
import { useState, useRef, useEffect } from "react";
// import PostMapWrapper from "./PostMap/PostMap";
import "./PostBody.css";
import Image from "next/image";

export default function PostBody({ post }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const imgRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const updateImageSize = () => {
    if (imgRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;
      const imageWidth = imgRef.current.naturalWidth;
      const imageHeight = imgRef.current.naturalHeight;

      if (imageWidth > modalWidth || imageHeight > modalHeight) {
        const widthRatio = modalWidth / imageWidth;
        const heightRatio = modalHeight / imageHeight;
        const scaleFactor = Math.min(widthRatio, heightRatio);

        imgRef.current.style.width = `${scaleFactor * imageWidth}px`;
        imgRef.current.style.height = `${scaleFactor * imageHeight}px`;
      } else {
        imgRef.current.style.width = `${imageWidth}px`;
        imgRef.current.style.height = `${imageHeight}px`;
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", updateImageSize);
      updateImageSize();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateImageSize);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateImageSize);
    };
  }, [showModal]);

  return (
    <>
      <div className="news-feed-post-body">
        <p className="news-feed-post-content">{post?.main?.feed}</p>
        {post?.main?.img && (
          <Image
            className="news-feed-post-img"
            // src={post?.main?.img}
            src="/images/business.jpg"
            alt="post"
            onClick={toggleModal}
            width={400}
            height={400}
            ref={imgRef}
          />
        )}
        <br></br>
        {post?.main?.location && (
          <>
            <p className="">location</p>
            {/* <iframe
              width="600"
              height="450"
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127199.13352958186!2d-73.97968120664063!3d40.69740344622097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1620670372061!5m2!1sen!2sin"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe> */}
          </>
        )}
      </div>

      {showModal && (
        <div
          className="news-feed-post-body-modal"
          onClick={toggleModal}
          ref={modalRef}
        >
          <div className="news-feed-post-body-modal-content">
            <Image
            width={400}
            height={400}
              className="news-feed-post-body-modal-img"
              src="/images/profile-icon-9.png"
              alt="post"
              ref={imgRef}
              onLoad={updateImageSize}
            />
          </div>
          <button
            className="news-feed-post-body-modal-close"
            onClick={toggleModal}
          >
            X
          </button>
        </div>
      )}
    </>
  );
}
