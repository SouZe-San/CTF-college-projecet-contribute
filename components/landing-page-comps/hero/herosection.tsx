"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import BackgroundGallery from "./backgroundGallery";
import "@/components/landing-page-comps/hero/heroSectionStyles.scss"


let number = 0 // !remove it when goes to the build 

function HeroSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posPerX = useRef(0);
  const posPerY = useRef(0);
  const panX = useRef(0);
  const panY = useRef(0);

  number++
  console.log("I have been re rendered" , number ,"times")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY;
      posPerX.current = mouseX.current / window.innerWidth;
      posPerY.current = mouseY.current / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleAnotherMouseMove = () => {
    if (galleryRef.current) {
      const maxX = galleryRef.current.offsetWidth - window.innerWidth;
      const maxY = galleryRef.current.offsetHeight - window.innerHeight;
      panX.current = maxX * posPerX.current * -1;
      panY.current = maxY * posPerY.current * -1;
      if ((mouseX.current <= window.innerWidth ) && (mouseY.current <= window.innerHeight)){
        gsap.to(galleryRef.current, {
          x: panX.current,
          y: panY.current,
          duration: .6,
          ease: "power2.out",
        });
      }
      
    }
  }
    window.addEventListener("mousemove", handleAnotherMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleAnotherMouseMove);
    };

  }, []);
  return (
    <div className="heroSection" id="HeroSection">
      {/* <NavBar /> */}
      <BackgroundGallery ref={galleryRef} />
      <div className="overlay">
        <div className="overlayContent">
          {/* <h1>Hi, I'm Rishabh</h1> */}
          <h2>Full Stack Developer</h2>
          <p>
            I am a full stack developer with a passion for building beautiful
            and functional websites. I am currently pursuing my B.Tech in
            Computer Science from VIT, Vellore.
          </p>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/rishabh-raj-2a1b3b1a0/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="
            https://github.com/Rishabhr96?tab=repositories&q=&
            type=&language=&sort="
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/rishabhr96/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/rishabh.raj.96/">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        bBackgroundGallery
      </div>
    </div>
  );
}
export default HeroSection;
