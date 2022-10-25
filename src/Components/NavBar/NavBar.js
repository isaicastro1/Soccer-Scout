import { Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav">
        <div>
          <h2 className="page-title">Soccer Scores</h2>
        </div>
        <ul className="nav-ul no-select">
          <li>La Liga</li>
          <li>Premier League</li>
          <li>Champions League</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
