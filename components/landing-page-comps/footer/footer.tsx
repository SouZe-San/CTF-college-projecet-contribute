import Image from "next/image";
import "@/components/landing-page-comps/footer/footerSectionStyles.scss"
import facebookImg from "@/public/socials-svg/social-facebook.svg";
import twitterImg from "@/public/socials-svg/social-twitter.svg";
import linkedInImg from "@/public/socials-svg/social-linkedin.svg";

function footer() {
  return (
    <div className="footerSection" id="FooterSection">
      <div className="footerContainer">
        <div className="footerLogoContainer">
          <div className="logoFooter">
            <h1>Capture the flag</h1>
            <h2>Unlock your potential</h2>
          </div>
          <div className="emailingSection">
            <input type="text" name="" id="" placeholder="Send a message" />
            <button>Send</button>
          </div>
        </div>
        <div className="footerBtnContainer">
          <div className="pageNavigationBtns">
            <h3 className="footerBtnTitle">Navigate</h3>
            <div className="navigate">
              <span>
                <a className="btnInlineBlock" href="#HomeSection">
                  Home
                </a>
              </span>
              <span>
                <a className="btnInlineBlock" href="RewardsSection ">
                  Rewards
                </a>
              </span>
              <span>
                <a className="btnInlineBlock" href="TopicsSection ">
                  Topics
                </a>
              </span>
              <span>
                <a className="btnInlineBlock" href="RulesSection ">
                  Rules
                </a>
              </span>
            </div>
          </div>
          <div className="contactBtns">
            <h3 className="footerBtnTitle">Contact</h3>
            <div className="contact">
              <span className="btnInlineBlock">+91 9876543215</span>
              <span className="btnInlineBlock">+91 9876543431</span>
              <span className="btnInlineBlock">cybersecurity@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSocialLinkContainer">
        <a href="">
          <Image
            src={facebookImg}
            width={40}
            height={40}
            alt="Picture of the author"
            style={{
              background: "#43CD86",
              borderRadius: "59%",
              padding: "5px",
            }}
          />
        </a>
        <a href="">
          <Image
            src={twitterImg}
            width={40}
            height={40}
            alt="Picture of the author"
            style={{
              background: "#43CD86",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </a>
        <a href="">
          <Image
            src={linkedInImg}
            width={40}
            height={40}
            alt="Picture of the author"
            style={{
              background: "#43CD86",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default footer;
