// import "@/components/landing-page-comps/navigationBar/navbar.scss"
"use client";
import "./navbar.scss";
import Link from "next/link";
import homeSvg from "@/public/nav-section-svgs/home-line.svg";
import profileSvg from "@/public/nav-section-svgs/user-line.svg";
import { useEffect, useState } from "react";

function Hello(){
  return (
    <div className="mobile-ones ">
            <div className="menu flex justify-between">
              <ul>
                <li>
                  <Link href="/">{homeSvg}</Link>
                </li>
                <li>
                  {/* <Link href="/#RewardsSection">Rewards</Link> */}
                </li>
                <li>
                  {/* <Link href="/#TopicsSection">Topics</Link> */}
                </li>
                <li>
                  {/* <Link href="/#RulesSection">Rules</Link> */}
                </li>
                <li>
                  <Link href="/dashboard">{profileSvg}</Link>
                </li>
              </ul>
            </div>
          </div>
  )
}

function NavBar() {
 

  return (
    <nav className="text-white">
      <div className="logo">
        <h1>CTF</h1>
      </div>
      <div className="btns flex justify-between">
        <div className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#RewardsSection">Rewards</Link>
            </li>
            <li>
              <Link href="/#TopicsSection">Topics</Link>
            </li>
            <li>
              <Link href="/#RulesSection">Rules</Link>
            </li>
            <li>
              <Link href="/dashboard">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="cta_btns">
          <button className="">
            <Link href="/login">Log in</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
