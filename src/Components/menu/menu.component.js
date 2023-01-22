import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import "./menu.styles.scss";

const Menu = ({
  onSignOutHandler,
  userData,
  userImage,
  profileImage,
  currentUser,
}) => {
  return (
    <div className="menu-container">
      <div className="menu-nav-links">
        <Link reloadDocument to="find-league">
          <p className="table-nav">LEAGUES</p>
        </Link>
        <Link reloadDocument to="next-matches">
          <p className="table-nav">FIXTURES</p>
        </Link>
        {currentUser ? (
          <>
            <span className="table-nav" onClick={onSignOutHandler}>
              SIGN OUT
            </span>
            <Link to="profile">
              {userData ? (
                <Avatar
                  src={userData.profilePicture}
                  className="nav-profile-image"
                  alt="Guest"
                />
              ) : (
                <Avatar
                  src={userImage || profileImage}
                  className="nav-profile-image"
                  alt="Guest"
                />
              )}
            </Link>
          </>
        ) : (
          <Link reloadDocument className="table-nav" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
