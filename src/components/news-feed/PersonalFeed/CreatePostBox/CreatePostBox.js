"use client";
import { useState } from "react";
import "./CreatePostBox.css";
import Image from "next/image";
// import profile from '../../../../assets/profile.png'
import ModalPOst from "../shared/ModalPOst.jsx"

export default function CreatePostBox() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

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
                src="/images/profile-icon-9.png"
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
        <ModalPOst toggleModal={toggleModal} />
      )}
    </>
  );
}
