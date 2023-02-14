import { useEffect, useState, useRef, useContext } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

import { teamsInfo } from "../../utils/team-id";
import { uploadFavoritesToFirebase } from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/user.context";

import "./favorites.styles.scss";

const Favorites = ({ currentUser, setAllUserFavorites }) => {
  const [newFavorites, setNewFavorites] = useState([]);
  const [favoritesDone, setFavoritesDone] = useState(false);

  const { setOpenFavorites, openFavorites } = useContext(UserContext);

  useEffect(() => {
    const uploadFavorites = () => {
      if (!currentUser || !currentUser.email || !newFavorites.length) return;
      uploadFavoritesToFirebase(currentUser.email, newFavorites);
    };

    uploadFavorites();
  }, [favoritesDone, currentUser]);

  const handleClick = (teamName) => {
    if (newFavorites.includes(teamName)) {
      return setNewFavorites(newFavorites.filter((team) => team !== teamName));
    }
    setNewFavorites([...newFavorites, teamName]);
  };

  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setOpenFavorites(!openFavorites);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleSubmit = () => {
    setFavoritesDone(true);
    setAllUserFavorites(newFavorites);
    setTimeout(() => {
      setOpenFavorites(!openFavorites);
    }, 0);
  };

  return (
    <>
      {!openFavorites ? null : (
        <div className="favorites-wrapper">
          <div className="favorites-container" ref={myRef}>
            {teamsInfo.map((team) => {
              return (
                <div
                  className={`team ${
                    newFavorites.includes(team["name"]) ? "chosen" : ""
                  }`}
                  name={team["name"]}
                  value={team["name"]}
                  onClick={() => {
                    handleClick(team["name"]);
                  }}
                  key={team["id"]}
                >
                  <h3 style={{ fontSize: "11px" }}>{team["name"]}</h3>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={team["logo"]}
                    alt="logo"
                  />
                </div>
              );
            })}
            <div className="submit-button">
              <ToggleButton
                value="check"
                className="check-button"
                onClick={handleSubmit}
              >
                <CheckIcon />
              </ToggleButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
