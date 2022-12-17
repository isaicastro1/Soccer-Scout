import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import { signOutUser } from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/user.context";
import SoccerLogo from "../../Assets/soccer-logo.png";

import "./NavBar.scss";

const NavBar = () => {
  const { currentUser, userImage, setUserImage } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profile-image")
  );

  const onSignOutHandler = () => {
    setProfileImage("");
    setUserImage("");
    localStorage.removeItem("profile-image");
    signOutUser();
  };

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
            <span className="table-nav" onClick={onSignOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="table-nav" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <Link to="profile">
            <Avatar
              src={userImage || profileImage}
              className="nav-profile-image"
              alt="Guest"
            />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
