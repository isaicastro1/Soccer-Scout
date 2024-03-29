import { useContext, useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import Menu from "../menu/menu.component";

import { UserContext } from "../../contexts/user.context";
import { TeamDataContext } from "../../contexts/teamData.context";

import {
  getUserDataFromFirebase,
  signOutUser,
} from "../../utils/firebase/firebase";

import SoccerLogo from "../../Assets/soccer-logo.png";

import Avatar from "@mui/material/Avatar";
import "./NavBar.scss";

const NavBar = () => {
  const { currentUser, userImage, setUserImage } = useContext(UserContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(TeamDataContext);
  const [userData, setUserData] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClass = isMenuOpen ? "open" : "";

  useEffect(() => {
    const getUserData = async () => {
      if (!currentUser) return;
      const data = await getUserDataFromFirebase(currentUser);
      setUserData(data);
    };

    getUserData();
  }, [currentUser]);

  const navigate = useNavigate();

  const onSignOutHandler = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
    setUserImage("");
    signOutUser();
    navigate("/sign-in");
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <Link reloadDocument className="link" to="/">
            <img className="soccer-logo" src={SoccerLogo} alt="soccer-logo" />
          </Link>
          <div className="right-nav-container">
            <div className={`hamburger-menu ${menuClass}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className={`nav-links ${menuClass}`}>
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
                        src={userImage}
                        className="nav-profile-image"
                        alt="Guest"
                      />
                    )}
                  </Link>
                </>
              ) : (
                <Link className="table-nav" to="/sign-in">
                  SIGN IN
                </Link>
              )}
            </div>
          </div>
        </div>
        {menuClass ? (
          <Menu
            onSignOutHandler={onSignOutHandler}
            userData={userData}
            userImage={userImage}
            currentUser={currentUser}
          />
        ) : (
          <></>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
