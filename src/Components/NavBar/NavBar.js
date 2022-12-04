import { Outlet, Link } from "react-router-dom";

import { TfiBell, TfiSearch } from "react-icons/tfi";

import { AiOutlineTable } from "react-icons/ai";

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
            <AiOutlineTable className="table-nav" />
          </Link>
          <Link reloadDocument to="next-matches">
            <AiOutlineTable className="table-nav" />
          </Link>
          <TfiSearch className="search" />
          <TfiBell className="bell" />
          <img src="https://picsum.photos/25/25" alt="logo" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
