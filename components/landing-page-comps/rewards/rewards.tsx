import "./rewardsstyle.scss";
import Image from "next/image";
import rewardTBS from "@/public/title-stoked-bg/rewardsTitleBgStoked.svg";
export default function rewards() {
  return (
    <div className="rewardsSection" id="RewardsSection">
      <div className="header">
        <Image
          className="bg-title-stoked"
          src={rewardTBS}
          alt="competion title svg"
        />
        <h1 className="reawadsTitle sectionTitle">REWARDS</h1>
      </div>
      <div className="rewardCardsContainer">
          <div className="cards">
            <div className="card">
              <div className="outerBorder">
                <div className="innerBorder">
                  <div className="topInfo">
                    <h1 className="numValue">02</h1>
                    <h1 className="stringValue">SECOND</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardMain card">
            <div className="outerBorder">
                <div className="innerBorder">
                  <div className="topInfoMain">
                    <h1 className="numValueMain">01</h1>
                    <h1 className="stringValue">FIRST</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
            <div className="outerBorder">
                <div className="innerBorder">
                  <div className="topInfo">
                    <h1 className="numValue">03</h1>
                    <h1 className="stringValue">THIRD</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
