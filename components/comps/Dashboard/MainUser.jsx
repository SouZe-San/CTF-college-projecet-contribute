import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
import gsap from "gsap";
// Stylesheet
import "../../styles/Dashboard/mainUser.scss";

const MainUser = () => {
  const mainUserRef = useRef();
  const teamNameRef = useRef();

  // Welcome Animation
  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.from(mainUserRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
    })
      .to(teamNameRef.current, {
        opacity: 1,
        y: 0,
      })
      .from(".box_item", {
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
          from: "center",
        },
      });

    tl.play();
  }, []);

  return (
    <div
      className="w-full flex justify-center flex-col mainUser_div"
      data-scroll
      data-scroll-speed="0.8"
      ref={mainUserRef}
    >
      {/* -------- NEW STYLE ----------- */}
      <div className="hunger"></div>
      <div className="card_upper_part">
        <div className="card_inner_part">
          <div className="bg w-full bg-gradient-to-r from-green-500 to-blue-500  h-[27%]">
            <h1>34</h1>
          </div>
          <div className="hexagon">
            <h1>E</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="150.21"
              viewBox="0 0 170 150"
            >
              <polygon
                points="100,20 150,50 150,110 100,140 50,110 50,50"
                fill="none"
                strokeWidth="15"
              />
            </svg>
          </div>

          <div className="user_details mb-4">
            <div className="score">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z"></path>
              </svg>
              445
            </div>
            <h2 ref={teamNameRef}>Elf Kingdom</h2>

            <div className="box flex items-center">
              <div className="flag_num box_item text-center">
                34
                <p>Flag</p>
              </div>
              <div className="horizon">
                <hr />
                <hr className="mt-[2px]" />
              </div>

              <div className="members box_item text-center">
                4<p>Members</p>
              </div>
              <div className="horizon">
                <hr />
                <hr className="mt-[2px]" />
              </div>
              <div className="completion box_item text-center">
                84%
                <p>Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUser;
