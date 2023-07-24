"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import BackgroundGallery from "./backgroundGallery";
import "./heroSectionStyles.scss"
import Link from "next/link";


let number = 0 // !remove it when goes to the build 

function HeroSection() {
  let [resizeTheWidth , setResizeTheWidth] = useState(window.outerHeight)
  // const windowThing
  const galleryRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posPerX = useRef(0);
  const posPerY = useRef(0);
  const panX = useRef(0);
  const panY = useRef(0);

  number++
  // console.log("I have been re rendered" , number ,"times")


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY;
      posPerX.current = mouseX.current / window.innerWidth;
      posPerY.current = mouseY.current / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("resize", () =>{
      // setResizeTheWidth(resizeTheWidth = window.innerWidth)
      // console.log(resizeTheWidth)
    // })

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
      {resizeTheWidth>= 480 ? <BackgroundGallery ref={galleryRef}/> : ""}
      {/* <BackgroundGallery ref={galleryRef} /> */}
      <div className="overlay">
        <div className="overlayContent">
          <h1 className="heroSectionTitle">
            <div className="upperTitle">CAPTURE</div>
            <div className="lowerTitle">THE FLAG</div>
            </h1>
          
          <p className="tagline">Team up, stealth in, and secure victory in every game!</p>
          <button className="ctaBtnOfHero"> <Link href="/flags" >Conquer The Flags</Link></button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
