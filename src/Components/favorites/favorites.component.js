import { useEffect, useState, useRef, useContext } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

import { teamsInfo } from "../../utils/team-id";
import { uploadFavoritesToFirebase } from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/user.context";

import "./favorites.styles.scss";

const handleClick = (event) => {
  event.currentTarget.classList.toggle("chosen");
};

const Favorites = ({ currentUser }) => {
  const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const { setOpenFavorites, openFavorites, setUserFavorites } =
    useContext(UserContext);

  const element = document.querySelectorAll(".chosen");

  useEffect(() => {
    const getFavorites = () => {
      if (!element) return;
      return Array.from(element).map((item) => {
        return item.innerText;
      });
    };

    const allFavorites = getFavorites();
    setFavorites(allFavorites);
    setUserFavorites(allFavorites);
  }, [selected, setUserFavorites]);

  useEffect(() => {
    const uploadFavorites = () => {
      if (!currentUser || !currentUser.email || !favorites.length) return;
      uploadFavoritesToFirebase(currentUser.email, favorites);
    };

    uploadFavorites();
  }, [favorites, currentUser]);

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
    setSelected(!selected);
  };

  return (
    <>
      {!openFavorites ? (
        <></>
      ) : (
        <>
          <div className="favorites-container" ref={myRef}>
            {teamsInfo.map((team) => {
              return (
                <div
                  className="team"
                  name={team[0]}
                  value={team[0]}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  key={team[2]}
                >
                  <h3 style={{ fontSize: "11px" }}>{team[0]}</h3>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={team[1]}
                    alt="logo"
                  />
                </div>
              );
            })}
            <div className="submit-button">
              <ToggleButton
                value="check"
                selected={selected}
                className="check-button"
                onClick={handleSubmit}
              >
                <CheckIcon />
              </ToggleButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Favorites;
