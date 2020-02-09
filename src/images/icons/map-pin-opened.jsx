import React from "react";

const MapPinOpened = props => (
  <svg
    viewBox="0 0 68.959999 95.475906"
    x="0px"
    y="0px"
    width={68.959999}
    height={95.475906}
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop offset={0} stopColor="#3e002d" stopOpacity={1} />
        <stop offset={1} stopColor="#af007e" stopOpacity={1} />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        gradientUnits="userSpaceOnUse"
        x1={48.700359}
        y1={97.025963}
        x2={48.700359}
        y2={4.002708}
      />
    </defs>
    <path
      d="M50 4a33.54 33.54 0 00-33.5 33.5c0 10.06 5.31 17.88 10.45 25.44.84 1.23 1.67 2.46 2.47 3.69C33.13 72.31 36.7 78.26 40.15 84q2.55 4.26 5.12 8.5l2.16 3.54a3 3 0 005.12 0c2.26-3.7 4.49-7.48 6.66-11.13 3.65-6.17 7.42-12.55 11.38-18.64 1-1.57 2.09-3.11 3.13-4.6l.74-1.07c4.95-7.15 9-13.83 9-23.12A33.54 33.54 0 0050 4zm0 49a17 17 0 1117-17 17 17 0 01-17 17z"
      fill="url(#b)"
      fillOpacity={1}
      data-name="Layer 5"
      transform="translate(-15.5 -3)"
    />
  </svg>
);

export default MapPinOpened;
