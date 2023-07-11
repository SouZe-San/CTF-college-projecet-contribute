import React from "react";

// Stylesheet
import "../../styles/Dashboard/mainUser.scss";

const MainUser = () => {
  return (
    <div className="w-full flex justify-center flex-col mainUser_div">
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
                stroke-width="15"
              />
            </svg>
          </div>

          <div className="user_details mb-4">
            <div className="score">445</div>
            <h2>Elf Kingdom</h2>

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
