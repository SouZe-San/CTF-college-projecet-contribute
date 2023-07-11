import React from "react";

// Stylesheet
import "../../styles/Dashboard/mainUser.scss";

const MainUser = () => {
  return (
    <div className="w-full flex justify-center flex-col mainUser_div">
      {/* DEFECTED STYLE */}
      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg justify-self-center  user_card">
        <div className=" text-center mb-4">
          <h1 className="user_avatar">HK</h1>
        </div>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-8 text-[2rem]">Harem Kingdom</div>
          <div className="user_details mb-4">
            <p className="text-white text-[1.2rem;]">
              <span className="font-bold text-black"> Rank:</span> #5
            </p>
            <p className="text-white text-[1.2rem;]">
              <span className="font-bold"> Score: </span>445
            </p>
            <p className="text-white text-[1.2rem;]">
              <span className="font-bold"> Flag Collect:</span> 4
            </p>
            <p className="text-white text-[1.2rem;]">
              <span className="font-bold"> Team Members:</span> 3
            </p>
          </div>
        </div>
      </div> */}

      {/* -------- NEW STYLE ----------- */}
      <div className="hunger"></div>
      <div className="card_upper_part">
        <div className="card_inner_part">
          <div className="bg w-full bg-gradient-to-r from-green-500 to-blue-500  h-[27%]"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="170" height="150.21" viewBox="0 0 170 150">
            <polygon
              points="100,20 150,50 150,110 100,140 50,110 50,50"
              fill="none"
              stroke-width="15"
            />
          </svg>

          <div className="user_details mb-4">
            <div className="score">445</div>
            <h2>Elf Kingdom</h2>

            <div className="box flex">
              <div className="flag_num">
                34
                <p>Flag</p>
              </div>
              <div className="members">
                4<p>Members</p>
              </div>

              <div className="completion">
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
