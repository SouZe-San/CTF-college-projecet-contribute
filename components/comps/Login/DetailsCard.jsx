import React from "react";

// Added style
import "@/components/styles/login/detailsCard.scss";
import Image from "next/image";
import frddd2 from "@/public/frddd2.png";

const DetailsCard = () => {
  return (
    <>
      <h1>
        <span
          style={{
            fontSize: "3rem",
            position: "relative",
            zIndex: 1,
            fontFamily: " 'Tektur', cursive",
            top: "-21px",
            fontWeight: 500,
          }}
        >
          Capture
        </span>
        <span
          style={{
            position: "relative",
            top: "-1rem",
          }}
        >
          The
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M3 3H12.382C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3Z"
            fill="rgba(0,0,0,1)"
          ></path>
        </svg>
        <span
          style={{
            fontSize: "4rem",
            position: "absolute",
            right: "20px",
            fontFamily: " 'Tektur', cursive",
          }}
        >
          Flag
        </span>
      </h1>
      <Image
        alt="This is"
        src={frddd2}
        fill={true}
        style={{ filter: "drop-shadow(0px 13px 22px #2f8551b8)" }}
      />
      <h1
        className="bottomLine
          "
      >
        Lets Join In War
      </h1>
    </>
  );
};

export default DetailsCard;
