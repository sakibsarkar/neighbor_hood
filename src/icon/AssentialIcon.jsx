import React from "react";

const AssentialIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 115}
      height={height || 100}
      fill="none"
    >
      <path
        fill="#f4e186"
        d="M52.115 38.695C52.115 67.341 28.734 89.9 0 89.9V64.807c14.265 0 24.569-10.988 24.569-26.097zm37.45 0c0 15.11 10.486 26.112 24.758 26.112v25.108c-28.734 0-52.115-22.574-52.115-51.205z"
      />
      <path
        stroke="#006142"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="5"
        d="M67.424 1.968 20.22 17.633 46.903 98.03l47.203-15.666zM26.666 28.37l43.217-13.843M42.984 79.298l43.21-13.843"
      />
      <path
        fill="#006142"
        d="M67.545 83.623a2.337 2.337 0 1 0 0-4.675 2.337 2.337 0 0 0 0 4.675z"
      />
      <path
        stroke="#006142"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="5"
        d="M44.863 56.645a12.785 12.785 0 0 1 9.83 3.247 337.467 337.467 0 0 1 9.99-32.04"
      />
    </svg>
  );
};

export default AssentialIcon;
