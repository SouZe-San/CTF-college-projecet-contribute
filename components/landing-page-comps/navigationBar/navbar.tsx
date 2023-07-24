// import "@/components/landing-page-comps/navigationBar/navbar.scss"
import Link from "next/link";
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
              <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/app/page.tsx">Rewards</Link>
            </li>
            <li>
            <Link href="/app/page.tsx">Topics</Link>
            </li>
            <li>
            <Link href="/app/page.tsx">Rules</Link>
            </li>
            <li>
            <Link href="/app/page.tsx">Profile</Link>
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
