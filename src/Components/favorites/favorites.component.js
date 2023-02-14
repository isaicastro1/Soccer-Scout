import { useEffect, useState, useRef, useContext } from "react";
import Tappable from "react-tappable/lib/Tappable";

import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

import { teamsInfo } from "../../utils/team-id";
import { uploadFavoritesToFirebase } from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/user.context";

import "./favorites.styles.scss";

const handleClick = (event) => {
  event.currentTarget.classList.toggle("chosen");
};

const Favorites = ({ currentUser, setAllUserFavorites }) => {
  const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const { setOpenFavorites, openFavorites } = useContext(UserContext);

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
    setAllUserFavorites(allFavorites);
  }, [selected, setAllUserFavorites]);

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
                <Tappable
                  className="team"
                  name={team["name"]}
                  value={team["name"]}
                  onTap={(e) => {
                    handleClick(e);
                  }}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  key={team["id"]}
                >
                  <h3 style={{ fontSize: "11px" }}>{team["name"]}</h3>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={team["logo"]}
                    alt="logo"
                  />
                </Tappable>
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
        </div>
      )}
    </>
  );
};

export default Favorites;
