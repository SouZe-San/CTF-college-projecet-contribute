import Link from "next/link";
import "./navbar.scss";

function bigNav() {
  return (
    <>
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
    </>
  );
}

export default bigNav;
