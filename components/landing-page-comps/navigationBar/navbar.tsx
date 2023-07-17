// import "@/components/landing-page-comps/navigationBar/navbar.scss"

import "./navbar.scss"

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
              <a href="#HeroSection">Home</a>
            </li>
            <li>
              <a href="#RewardsSection">Rewards</a>
            </li>
            <li>
              <a href="#TopicsSection">Topics</a>
            </li>
            <li>
              <a href="#RulesSection">Rules</a>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
            
          </ul>
        </div>
        <div className="cta_btns">
          <button className="">Log in</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
