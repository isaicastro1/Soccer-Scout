import "./match-stats.styles.scss";

const MatchStats = ({ matchStats, Spinner, matchClicked }) => {
  if (!matchStats) {
    return <Spinner />;
  }

  const {
    fixture: {
      status: { long },
    },
    score: { fulltime, extratime },
  } = matchClicked;

  const {
    away: { response: awayResponse },
    home: { response: homeResponse },
  } = matchStats;

  const {
    team: { id: awayId, name: awayName, logo: awayLogo },
  } = awayResponse[0];

  const {
    team: { id: homeId, name: homeName, logo: homeLogo },
  } = homeResponse[0];

  const awayStats = awayResponse[0].statistics.reduce((obj, item) => {
    obj[item.type] = item.value;
    return obj;
  }, {});

  const homeStats = homeResponse[0].statistics.reduce((obj, item) => {
    obj[item.type] = item.value;
    return obj;
  }, {});

  console.log("homeStats", homeStats);
  console.log("awayStats", awayStats);

  return (
    <div className="match-stats-container">
      <div className="teams-wrapper">
        <div className="team-one-wrapper">
          <div className="team-one-name">{homeName}</div>
          <div className="team-one-logo">
            <img src={homeLogo} alt="logo" />
          </div>
        </div>
        <div className="scores-data">
          {/* <div className="aggregate">Agg : 4 - 3</div> */}
          <div className="fixture-score">{`${fulltime.home || 0} : ${
            fulltime.away || 0
          }`}</div>
          <div className="fixture-time">{long}</div>
        </div>
        <div className="team-two-wrapper">
          <div className="team-two-logo">
            <img src={awayLogo} alt="logo" />
          </div>
          <div className="team-two-name">{awayName}</div>
        </div>
      </div>
      <div className="statistics-container">
        <h5 className="statistics-title">STATISTICS</h5>
        <div className="possession-stats stats">
          <div className="stats-text">
            <span className="home-possession-percentage">
              {homeStats["Ball Possession"] || 0}
            </span>
            <h5>POSSESSION</h5>
            <span className="away-possession-percentage">
              {awayStats["Ball Possession"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-possession"
              max="100"
              value={homeStats["Ball Possession"].slice(0, 2) || 0}
              style={{
                "--progress-color":
                  homeStats["Ball Possession"] > awayStats["Ball Possession"]
                    ? "black"
                    : "gray",
              }}
            ></progress>
            <progress
              className="away-team-possession"
              max="100"
              value={awayStats["Ball Possession"].slice(0, 2) || 0}
              style={{
                "--progress-color":
                  awayStats["Ball Possession"] > homeStats["Ball Possession"]
                    ? "black"
                    : "gray",
              }}
            ></progress>
          </div>
        </div>
        <div className="total-shots-stats stats">
          <div className="stats-text">
            <span className="home-shots-percentage">
              {homeStats["Total Shots"] || 0}
            </span>
            <h5>TOTAL SHOTS</h5>
            <span className="away-shots-percentage">
              {awayStats["Total Shots"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-total-shots"
              max={Math.max(
                homeStats["Total Shots"] + 3,
                awayStats["Total Shots"] + 3
              )}
              value={homeStats["Total Shots"] || 0}
              style={{
                "--progress-color":
                  homeStats["Total Shots"] > awayStats["Total Shots"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-total-shots"
              max={Math.max(
                homeStats["Total Shots"] + 3,
                awayStats["Total Shots"] + 3
              )}
              value={awayStats["Total Shots"] || 0}
              style={{
                "--progress-color":
                  awayStats["Total Shots"] > homeStats["Total Shots"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-target-stats stats">
          <div className="stats-text">
            <span className="home-shots-target-percentage">
              {homeStats["Shots on Goal"] || 0}
            </span>
            <h5>SHOTS ON TARGET</h5>
            <span className="away-shots-target-percentage">
              {awayStats["Shots on Goal"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-shots-target"
              max={Math.max(
                homeStats["Shots on Goal"] + 2,
                awayStats["Shots on Goal"] + 2
              )}
              value={homeStats["Shots on Goal"] || 0}
              style={{
                "--progress-color":
                  homeStats["Shots on Goal"] > awayStats["Shots on Goal"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-shots-target"
              max={Math.max(
                homeStats["Shots on Goal"] + 2,
                awayStats["Shots on Goal"] + 2
              )}
              value={awayStats["Shots on Goal"] || 0}
              style={{
                "--progress-color":
                  awayStats["Shots on Goal"] > homeStats["Shots on Goal"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-off-target-stats stats">
          <div className="stats-text">
            <span className="home-off-target-percentage">
              {homeStats["Shots off Goal"] || 0}
            </span>
            <h5>SHOTS OFF TARGET</h5>
            <span className="away-off-target-percentage">
              {awayStats["Shots off Goal"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-off-target"
              max={Math.max(
                homeStats["Shots off Goal"] + 2,
                awayStats["Shots off Goal"] + 2
              )}
              value={homeStats["Shots off Goal"] || 0}
              style={{
                "--progress-color":
                  homeStats["Shots off Goal"] > awayStats["Shots off Goal"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-off-target"
              max={Math.max(
                homeStats["Shots off Goal"] + 2,
                awayStats["Shots off Goal"] + 2
              )}
              value={awayStats["Shots off Goal"] || 0}
              style={{
                "--progress-color":
                  awayStats["Shots off Goal"] > homeStats["Shots off Goal"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="blocked-shots-stats stats">
          <div className="stats-text">
            <span className="home-blocked-percentage">
              {homeStats["Blocked Shots"] || 0}
            </span>
            <h5>BLOCKED SHOTS</h5>
            <span className="away-blocked-percentage">
              {awayStats["Blocked Shots"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-blocked"
              max={Math.max(
                homeStats["Blocked Shots"] + 1,
                awayStats["Blocked Shots"] + 1
              )}
              value={homeStats["Blocked Shots"] || 0}
              style={{
                "--progress-color":
                  homeStats["Blocked Shots"] > awayStats["Blocked Shots"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-blocked"
              max={Math.max(
                homeStats["Blocked Shots"] + 1,
                awayStats["Blocked Shots"] + 1
              )}
              value={awayStats["Blocked Shots"] || 0}
              style={{
                "--progress-color":
                  awayStats["Blocked Shots"] > homeStats["Blocked Shots"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-inside-stats stats">
          <div className="stats-text">
            <span className="home-shots-inside-percentage">
              {homeStats["Shots insidebox"]}
            </span>
            <h5>SHOTS INSIDE BOX</h5>
            <span className="away-shots-inside-percentage">
              {awayStats["Shots insidebox"]}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-shots-inside"
              max={Math.max(
                homeStats["Shots insidebox"] + 2,
                awayStats["Shots insidebox"] + 2
              )}
              value={homeStats["Shots insidebox"] || 0}
              style={{
                "--progress-color":
                  homeStats["Shots insidebox"] > awayStats["Shots insidebox"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-shots-inside"
              max={Math.max(
                homeStats["Shots insidebox"] + 2,
                awayStats["Shots insidebox"] + 2
              )}
              value={awayStats["Shots insidebox"] || 0}
              style={{
                "--progress-color":
                  awayStats["Shots insidebox"] > homeStats["Shots insidebox"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-outside-stats stats">
          <div className="stats-text">
            <span className="home-shots-outside-percentage">
              {homeStats["Shots outsidebox"] || 0}
            </span>
            <h5>SHOTS OUTSIDE</h5>
            <span className="away-shots-outside-percentage">
              {awayStats["Shots outsidebox"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-shots-outside"
              max={Math.max(
                homeStats["Shots outsidebox"] + 2,
                awayStats["Shots outsidebox"] + 2
              )}
              value={homeStats["Shots outsidebox"] || 0}
              style={{
                "--progress-color":
                  homeStats["Shots outsidebox"] > awayStats["Shots outsidebox"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-shots-outside"
              max={Math.max(
                homeStats["Shots outsidebox"] + 2,
                awayStats["Shots outsidebox"] + 2
              )}
              value={awayStats["Shots outsidebox"] || 0}
              style={{
                "--progress-color":
                  awayStats["Shots outsidebox"] > homeStats["Shots outsidebox"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="fouls-stats stats">
          <div className="stats-text">
            <span className="home-fouls-percentage">{homeStats["Fouls"]}</span>
            <h5>FOULS</h5>
            <span className="away-fouls-percentage">{awayStats["Fouls"]}</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-fouls"
              max={Math.max(homeStats["Fouls"] + 4, awayStats["Fouls"] + 4)}
              value={homeStats["Fouls"]}
              style={{
                "--progress-color":
                  homeStats["Fouls"] > awayStats["Fouls"] ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-fouls"
              max={Math.max(homeStats["Fouls"] + 4, awayStats["Fouls"] + 4)}
              value={awayStats["Fouls"]}
              style={{
                "--progress-color":
                  awayStats["Fouls"] > homeStats["Fouls"] ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="corners-stats stats">
          <div className="stats-text">
            <span className="home-corners-percentage">
              {homeStats["Corner Kicks"] || 0}
            </span>
            <h5>CORNER KICKS</h5>
            <span className="away-corners-percentage">
              {awayStats["Corner Kicks"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-corners"
              max={Math.max(
                homeStats["Corner Kicks"] + 2,
                awayStats["Corner Kicks"] + 2
              )}
              value={homeStats["Corner Kicks"] || 0}
              style={{
                "--progress-color":
                  homeStats["Corner Kicks"] > awayStats["Corner Kicks"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-corners"
              max={Math.max(
                homeStats["Corner Kicks"] + 2,
                awayStats["Corner Kicks"] + 2
              )}
              value={awayStats["Corner Kicks"] || 0}
              style={{
                "--progress-color":
                  awayStats["Corner Kicks"] > homeStats["Corner Kicks"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="offsides-stats stats">
          <div className="stats-text">
            <span className="home-offsides-percentage">
              {homeStats["Offsides"] || 0}
            </span>
            <h5>OFFSIDES</h5>
            <span className="away-offsides-percentage">
              {awayStats["Offsides"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-offsides"
              max={Math.max(
                homeStats["Offsides"] + 2,
                awayStats["Offsides"] + 2
              )}
              value={homeStats["Offsides"] || 0 || 0}
              style={{
                "--progress-color":
                  homeStats["Offsides"] > awayStats["Offsides"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-offsides"
              max={Math.max(
                homeStats["Offsides"] + 2,
                awayStats["Offsides"] + 2
              )}
              value={awayStats["Offsides"] || 0}
              style={{
                "--progress-color":
                  awayStats["Offsides"] > homeStats["Offsides"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="yellow-stats stats">
          <div className="stats-text">
            <span className="home-yellows-percentage">
              {homeStats["Yellow Cards"] || 0}
            </span>
            <h5>YELLOW CARDS</h5>
            <span className="away-yellows-percentage">
              {awayStats["Yellow Cards"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-yellows"
              max={Math.max(
                homeStats["Yellow Cards"] + 2,
                awayStats["Yellow Cards"] + 2
              )}
              value={homeStats["Yellow Cards"] || 0}
              style={{
                "--progress-color":
                  homeStats["Yellow Cards"] > awayStats["Yellow Cards"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-yellows"
              max={Math.max(
                homeStats["Yellow Cards"] + 2,
                awayStats["Yellow Cards"] + 2
              )}
              value={awayStats["Yellow Cards"] || 0}
              style={{
                "--progress-color":
                  awayStats["Yellow Cards"] > homeStats["Yellow Cards"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="red-stats stats">
          <div className="stats-text">
            <span className="home-red-percentage">
              {homeStats["Red Cards"] || 0}
            </span>
            <h5>RED CARDS</h5>
            <span className="away-red-percentage">
              {awayStats["Red Cards"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-reds"
              max={Math.max(
                homeStats["Red Cards"] + 1,
                awayStats["Red Cards"] + 1
              )}
              value={(homeStats["Red Cards"] == null && 0) || 0}
              style={{
                "--progress-color":
                  homeStats["Red Cards"] > awayStats["Red Cards"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-reds"
              max={Math.max(
                homeStats["Red Cards"] + 1,
                awayStats["Red Cards"] + 1
              )}
              value={(awayStats["Red Cards"] == null && 0) || 0}
              style={{
                "--progress-color":
                  awayStats["Red Cards"] > homeStats["Red Cards"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="gk-saves-stats stats">
          <div className="stats-text">
            <span className="home-gk-percentage">
              {homeStats["Goalkeeper Saves"] || 0}
            </span>
            <h5>GOALKEEPER SAVES</h5>
            <span className="away-gk-percentage">
              {awayStats["Goalkeeper Saves"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-gk"
              max={Math.max(
                homeStats["Goalkeeper Saves"] + 2,
                awayStats["Goalkeeper Saves"] + 2
              )}
              value={homeStats["Goalkeeper Saves"] || 0}
              style={{
                "--progress-color":
                  homeStats["Goalkeeper Saves"] > awayStats["Goalkeeper Saves"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-gk"
              max={Math.max(
                homeStats["Goalkeeper Saves"] + 2,
                awayStats["Goalkeeper Saves"] + 2
              )}
              value={awayStats["Goalkeeper Saves"] || 0}
              style={{
                "--progress-color":
                  awayStats["Goalkeeper Saves"] > homeStats["Goalkeeper Saves"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="passes-stats stats">
          <div className="stats-text">
            <span className="home-passes-percentage">
              {homeStats["Total passes"] || 0}
            </span>
            <h5>TOTAL PASSES</h5>
            <span className="away-duels-percentage">
              {awayStats["Total passes"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-passes"
              max={Math.max(
                homeStats["Total passes"] + 50,
                awayStats["Total passes"] + 50
              )}
              value={homeStats["Total passes"] || 0}
              style={{
                "--progress-color":
                  homeStats["Total passes"] > awayStats["Total passes"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-passes"
              max={Math.max(
                homeStats["Total passes"] + 50,
                awayStats["Total passes"] + 50
              )}
              value={awayStats["Total passes"] || 0}
              style={{
                "--progress-color":
                  awayStats["Total passes"] > homeStats["Total passes"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        <div className="accuracy-stats stats">
          <div className="stats-text">
            <span className="home-accuracy-percentage">
              {homeStats["Passes accurate"] || 0}
            </span>
            <h5>ACCURATE PASSES</h5>
            <span className="away-accuracy-percentage">
              {awayStats["Passes accurate"] || 0}
            </span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-accuracy"
              max={Math.max(
                homeStats["Passes accurate"] + 50,
                awayStats["Passes accurate"] + 50
              )}
              value={homeStats["Passes accurate"] || 0}
              style={{
                "--progress-color":
                  homeStats["Passes accurate"] > awayStats["Passes accurate"]
                    ? "black"
                    : "gray",
              }}
            />
            <progress
              className="away-team-accuracy"
              max={Math.max(
                homeStats["Passes accurate"] + 50,
                awayStats["Passes accurate"] + 50
              )}
              value={awayStats["Passes accurate"] || 0}
              style={{
                "--progress-color":
                  awayStats["Passes accurate"] > homeStats["Passes accurate"]
                    ? "black"
                    : "gray",
              }}
            />
          </div>
        </div>
        {homeStats["expected_goals"] && awayStats["expected_goals"] ? (
          <div className="expected-stats stats">
            <div className="stats-text">
              <span className="home-expected-percentage">
                {homeStats["expected_goals"] || 0}
              </span>
              <h5>EXPECTED GOALS</h5>
              <span className="away-expected-percentage">
                {awayStats["expected_goals"] || 0}
              </span>
            </div>
            <div className="progress-bars">
              <progress
                className="home-team-expexted-goals"
                max={Math.max(
                  homeStats["expected_goals"],
                  awayStats["expected_goals"]
                )}
                value={homeStats["expected_goals"] || 0}
                style={{
                  "--progress-color":
                    homeStats["expected_goals"] > awayStats["expected_goals"]
                      ? "black"
                      : "gray",
                }}
              />
              <progress
                className="away-team-expexted-goals"
                max={Math.max(
                  homeStats["expected_goals"],
                  awayStats["expected_goals"]
                )}
                value={awayStats["expected_goals"] || 0}
                style={{
                  "--progress-color":
                    awayStats["expected_goals"] > homeStats["expected_goals"]
                      ? "black"
                      : "gray",
                }}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MatchStats;
