import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import { signOutUser } from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/user.context";
import SoccerLogo from "../../Assets/soccer-logo.png";

import "./NavBar.scss";

function NavBar() {
  const { currentUser, userImage } = useContext(UserContext);

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
          {currentUser ? (
            <span className="table-nav" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="table-nav" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <Link to="profile">
            <Avatar
              src={userImage}
              className="nav-profile-image"
              alt="profile"
            />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
