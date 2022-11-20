import { Outlet, Link } from "react-router-dom";

import { TfiBell, TfiSearch } from "react-icons/tfi";

import { AiOutlineTable } from "react-icons/ai";

import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Link className="link" to="/">
          <h2 className="page-title">Soccer Scores</h2>
        </Link>
        <div className="right-nav-container">
          <Link to="find-league">
            <AiOutlineTable className="table-nav" />
          </Link>
          <TfiSearch className="search" />
          <TfiBell className="bell" />
          <img src="https://source.unsplash.com/featured/25x25" alt="logo" />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
