import { useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

import { teamsInfo } from "../../utils/team-id";
import { uploadFavoritesToFirebase } from "../../utils/firebase/firebase";

import "./favorites.styles.scss";

const handleClick = (event) => {
  event.currentTarget.classList.toggle("chosen");
};

const Favorites = ({ currentUser }) => {
  const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState([]);

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
  }, [selected]);

  const uploadFavorites = () => {
    if (!currentUser || !currentUser.email || !favorites.length) return;
    uploadFavoritesToFirebase(currentUser.email, favorites);
  };

  uploadFavorites();

  const handleSubmit = () => {
    setSelected(!selected);
    console.log("done");
  };

  return (
    <>
      <div className="favorites-container">
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
      </div>
      <div className="submit-button">
        <ToggleButton
          value="check"
          selected={selected}
          className="check-button"
          onChange={handleSubmit}
        >
          <CheckIcon />
        </ToggleButton>
      </div>
    </>
  );
};

export default Favorites;
