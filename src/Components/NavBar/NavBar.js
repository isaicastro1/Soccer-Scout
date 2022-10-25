import { Outlet, Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Link className="link" to="/">
          <h2 className="page-title">Soccer Scores</h2>
        </Link>
        <ul className="nav-ul no-select">
          <Link className="link" to="laliga">
            <li>La Liga</li>
          </Link>
          <Link className="link" to="premier">
            <li>Premier League</li>
          </Link>
          <li>Champions League</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
