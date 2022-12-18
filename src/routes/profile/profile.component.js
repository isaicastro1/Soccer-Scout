import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/user.context";

import { getUserDataFromFirebase } from "../../utils/firebase/firebase";

import "./profile.styles.scss";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { currentUser, userImage } = useContext(UserContext);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserDataFromFirebase(currentUser);
      setUserData(data);
    };

    getUserData();
  }, [currentUser]);

  return (
    <>
      {userData ? (
        <section
          className="profile-container vh-100 vw-100"
          style={{ backgroundColor: "f4f5f7" }}
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src={userImage}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
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
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Profile;
