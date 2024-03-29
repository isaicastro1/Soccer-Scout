import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import "./menu.styles.scss";

const Menu = ({ userData, userImage, currentUser, onSignOutHandler }) => {
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
            <Link
              className="table-nav"
              to="/sign-in"
              onClick={onSignOutHandler}
            >
              SIGN OUT
            </Link>
            <Link className="profile-link" to="profile">
              <span className="table-nav">PROFILE</span>
              {userData ? (
                <>
                  <Avatar
                    src={userData.profilePicture}
                    className="nav-profile-image"
                    alt="Guest"
                  />
                </>
              ) : (
                <Avatar
                  src={userImage}
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
