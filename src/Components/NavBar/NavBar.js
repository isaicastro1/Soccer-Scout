import { useContext, useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import Menu from "../menu/menu.component";

import { UserContext } from "../../contexts/user.context";

import {
  getUserDataFromFirebase,
  signOutUser,
} from "../../utils/firebase/firebase";

import SoccerLogo from "../../Assets/soccer-logo.png";

import Avatar from "@mui/material/Avatar";
import "./NavBar.scss";

const NavBar = () => {
  const { currentUser, userImage, setUserImage } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profile-image")
  );
  const [userData, setUserData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const menuClass = menuIsOpen ? "open" : "";

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
    setProfileImage("");
    setUserImage("");
    localStorage.removeItem("profile-image");
    signOutUser();
    navigate("/sign-in");
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <Link className="link" to="/">
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
                      src={userImage || profileImage}
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
      <Outlet />
      {menuClass ? (
        <Menu
          onSignOutHandler={onSignOutHandler}
          userData={userData}
          userImage={userImage}
          profileImage={profileImage}
          currentUser={currentUser}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
