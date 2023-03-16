import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/user.context";
import { TeamDataContext } from "../../contexts/teamData.context";

import {
  getUserDataFromFirebase,
  getFavoritesFromFirebase,
} from "../../utils/firebase/firebase";
import Favorites from "../../Components/favorites/favorites.component";
import Spinner from "../../Components/spinner/spinner.component";
import { teamsLogo } from "../../utils/team-id";

import "./profile.styles.scss";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [allUserFavorites, setAllUserFavorites] = useState(null);

  const { currentUser, userImage, setOpenFavorites, openFavorites } =
    useContext(UserContext);

  const { isMenuOpen, setIsMenuOpen } = useContext(TeamDataContext);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  }, [setIsMenuOpen]);

  useEffect(() => {
    const getUserData = async () => {
      if (!currentUser) return;
      const data = await getUserDataFromFirebase(currentUser);
      setUserData(data);
    };

    getUserData();
  }, [currentUser]);

  useEffect(() => {
    const getUserFavorites = async () => {
      if (!currentUser || !currentUser.email) return;
      const favorites = await getFavoritesFromFirebase(currentUser.email);

      try {
        const favoriteTeams = await fetch(favorites);
        const data = await favoriteTeams.text();
        let favoritesArray = data.split(",");
        setAllUserFavorites(favoritesArray);
      } catch (error) {
        console.log(error);
      }
    };

    getUserFavorites();
  }, [currentUser]);

  return (
    <>
      {userData ? (
        <section
          className="profile-container vh-100 vw-100"
          style={{ backgroundColor: "f4f5f7" }}
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4" style={{ width: "70%" }}>
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    {userData.profilePicture ? (
                      <img
                        src={userData.profilePicture}
                        alt="Avatar"
                        className="img-fluid my-5"
                        style={{ width: "80px" }}
                      />
                    ) : userImage ? (
                      <img
                        src={userImage}
                        alt="Avatar"
                        className="img-fluid my-5"
                        style={{ width: "80px" }}
                      />
                    ) : (
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-10mi8st-MuiSvgIcon-root-MuiAvatar-fallback"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PersonIcon"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                    )}
                    <h5>{userData.displayName}</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{userData.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{userData.phoneNumber}</p>
                        </div>
                      </div>
                      <h6>Favorites</h6>
                      <hr className="mt-0" />
                      <div className="profile-favorites">
                        <div className="favorite-teams">
                          {allUserFavorites ? (
                            allUserFavorites.map((item) => {
                              return (
                                <img
                                  className="favorite-image"
                                  src={teamsLogo[item]}
                                  key={item}
                                  alt="logo"
                                />
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="pt-1 favorites-button-container">
                          <button
                            className="add-favorites"
                            onClick={() => {
                              setOpenFavorites(!openFavorites);
                            }}
                          >
                            update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner style={{ width: "100vw", height: "100vh" }} />
      )}
      {openFavorites ? (
        <Favorites
          currentUser={currentUser}
          setAllUserFavorites={setAllUserFavorites}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
