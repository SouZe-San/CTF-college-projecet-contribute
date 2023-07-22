import React from "react";

// Added style
import "@/components/styles/login/mainblock.scss";

import InputCard from "./InputCard";
import DetailsCard from "./DetailsCard";
const MainBlock = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <div className="card_case flex">
        <div className="page_details flex-none relative">
          <DetailsCard />
        </div>
        <div className="page_input flex-grow">
          <InputCard />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
