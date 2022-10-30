import { Outlet, Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Link className="link" to="/">
          <h2 className="page-title">Soccer Scores</h2>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
