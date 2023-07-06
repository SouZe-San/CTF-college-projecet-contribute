import React from "react";

// Stylesheet
import "../../styles/Dashboard/mainUser.scss";

const MainUser = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg justify-self-center  user_card">
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
      </div>
    </div>
  );
};

export default MainUser;
