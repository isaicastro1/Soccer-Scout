import "../App.css"
import logo from "../Assets/code-logo.png"

function NavBar() {
  return (
    <div>
      <ul className="nav-wrapper">
      <img className="logo" src={logo} alt="img" />
        <div className="nav">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li className="contact-nav">Contact</li>
        </div>
          <label htmlFor="checkbox" className="menu">
            <input type="checkbox" id="checkbox"></input>
            <span className="line line-main"></span>
            <span className="line line-split"></span>
          </label>
          <div className="dropdown">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>
      </ ul>
    </div>
  );
}

export default NavBar;