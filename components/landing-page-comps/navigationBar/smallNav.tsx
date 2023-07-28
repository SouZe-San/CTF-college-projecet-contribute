import Link from "next/link"
import homeSvg from "@/public/nav-section-svgs/home-line.svg";
import profileSvg from "@/public/nav-section-svgs/user-line.svg";


function SmallNav() {
  return (
          <div className="btns ">
            <div className="menu flex justify-between">
              <ul>
                <li>
                  <Link href="/">{homeSvg}</Link>
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
                  <Link href="/dashboard">{profileSvg}</Link>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default SmallNav
