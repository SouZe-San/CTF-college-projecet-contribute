// import "@/components/landing-page-comps/navigationBar/navbar.scss"
"use client";
import BigNav from "./bigNav";
import SmallNav from "./smallNav";
import "./navbar.scss";
import { useEffect, useState } from "react";
function NavBar() {
  let [resizeTheWidth, setResizeTheWidth] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Hello ji ");
      window.innerWidth >= 480
        ? setResizeTheWidth(true)
        : setResizeTheWidth(false);
      console.log(resizeTheWidth);
    });

    // return () =>
    //   window.removeEventListener("resize", () => console.log("removed"));
  }, [resizeTheWidth]);

  return (
    <nav className="text-white">
      {resizeTheWidth ? <BigNav /> : <SmallNav />}
    </nav>
  );
}

export default NavBar;
