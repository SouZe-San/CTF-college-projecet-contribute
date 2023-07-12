import { ReactNode } from "react";
import crypotImage from "@/public/compressedape-min.png";
import Image from "next/image";
import arrowPng from "@/public/icons8-arrow-100.png";

import "@/components/styles/landing-page-styles/topicSectionStyles.scss";

const topicNames = [
  "PWN",
  "Cryptography",
  "Promt injection",
  "Reverse engineering",
  "Web security",
  "Hardware exploration",
];

//
//
//
//
//
function Rules() {
  return (
    <div className="topicsSection" id="TopicsSection">
      <h1 className="titleOfSection sectionTitle">Topics</h1>
      <div className="topicContainer">
        {topicNames.map((rule, index) => {
          return (
            <div className="topicWrapperContainer" key={index}>
              <div className="marqueeContainer">
                <span className="topicSectionTitle">
                  {rule} {rule} {rule}
                </span>
              </div>

              <div className="topicWrapper">
                <div id="index" className="numberId">
                  (00{index + 1})
                </div>

                <div className="rule">{rule}</div>

                <div className="arrowSvg">
                  {<Image src={arrowPng} width={50} alt="Arrow link" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={crypotImage}
        width={100}
        height={100}
        alt="this is the best"
      />
    </div>
  );
}
export default Rules;
