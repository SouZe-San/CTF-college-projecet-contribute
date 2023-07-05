import "@/components/styles/landing-page-styles/navbar.scss"
function NavBar() {
    return (
      <nav className="text-white">
        <div className="logo">
            <h1>CTF</h1>
        </div>
        <div className="btns flex justify-between">
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="cta_btns">
                <button className="">Log in</button>
            </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar
  