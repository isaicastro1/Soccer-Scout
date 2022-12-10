import { Outlet, Link } from "react-router-dom";

import SoccerLogo from "../../Assets/soccer-logo.png";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav">
        <Link className="link" to="/">
          <img className="soccer-logo" src={SoccerLogo} alt="soccer-logo" />
        </Link>
        <div className="right-nav-container">
          <Link reloadDocument to="find-league">
            <p className="table-nav">LEAGUES</p>
          </Link>
          <Link reloadDocument to="next-matches">
            <p className="table-nav">FIXTURES</p>
          </Link>
          <Link reloadDocument to="auth">
            <p className="table-nav">SIGN IN</p>
          </Link>
          <img src="https://picsum.photos/25/25" alt="logo" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
