import "./match-stats.styles.scss";

const MatchStats = ({ matchStats }) => {
  return (
    <div className="match-stats-container">
      <div className="teams-wrapper">
        <div className="team-one-wrapper">
          <div className="team-one-name">Manchester City</div>
          <div className="team-one-logo">
            <img src="" alt="logo" />
          </div>
        </div>
        <div className="scores-data">
          <div className="aggregate">Agg : 4 - 3</div>
          <div className="fixture-score">2 : 1</div>
          <div className="fixture-time">Full Time</div>
        </div>
        <div className="team-two-wrapper">
          <div className="team-two-logo">
            <img src="" alt="logo" />
          </div>
          <div className="team-two-name">Real Madrid</div>
        </div>
      </div>
      <div className="statistics-container">
        <h5 className="statistics-title">STATISTICS</h5>
        <div className="possession-stats stats">
          <div className="stats-text">
            <span className="home-possession-percentage">40%</span>
            <h5>POSSESSION</h5>
            <span className="away-possession-percentage">60%</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-possession"
              max="100"
              value={40}
              style={{ "--progress-color": 40 >= 60 ? "black" : "gray" }}
            ></progress>
            <progress
              className="away-team-possession"
              max="100"
              value={60}
              style={{ "--progress-color": 60 >= 40 ? "black" : "gray" }}
            ></progress>
          </div>
        </div>
        <div className="total-shots-stats stats">
          <div className="stats-text">
            <span className="home-shots-percentage">4</span>
            <h5>TOTAL SHOTS</h5>
            <span className="away-shots-percentage">6</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-total-shots"
              max="10"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-total-shots"
              max="10"
              value="6"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-target-stats stats">
          <div className="stats-text">
            <span className="home-shots-target-percentage">1</span>
            <h5>SHOTS ON TARGET</h5>
            <span className="away-shots-target-percentage">0</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-shots-target"
              max="2"
              value="1"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-shots-target"
              max="1"
              value="0"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-off-target-stats stats">
          <div className="stats-text">
            <span className="home-off-target-percentage">6</span>
            <h5>SHOTS OFF TARGET</h5>
            <span className="away-off-target-percentage">4</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="10"
              value="6"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="10"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="blocked-shots-stats stats">
          <div className="stats-text">
            <span className="home-blocked-percentage">2</span>
            <h5>BLOCKED SHOTS</h5>
            <span className="away-blocked-percentage">8</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="10"
              value="2"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="10"
              value="8"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-inside-stats stats">
          <div className="stats-text">
            <span className="home-shots-inside-percentage">6</span>
            <h5>SHOTS INSIDE BOX</h5>
            <span className="away-shots-inside-percentage">4</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="10"
              value="6"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="10"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="shots-outside-stats stats">
          <div className="stats-text">
            <span className="home-shots-outside-percentage">2</span>
            <h5>SHOTS OUTSIDE</h5>
            <span className="away-shots-outside-percentage">0</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="4"
              value="2"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="4"
              value="0"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="fouls-stats stats">
          <div className="stats-text">
            <span className="home-fouls-percentage">2</span>
            <h5>FOULS</h5>
            <span className="away-fouls-percentage">4</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="6"
              value="2"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="6"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="duels-stats stats">
          <div className="stats-text">
            <span className="home-corners-percentage">2</span>
            <h5>CORNER KICKS</h5>
            <span className="away-corners-percentage">4</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="5"
              value="2"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="5"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="offsides-stats stats">
          <div className="stats-text">
            <span className="home-offsides-percentage">0</span>
            <h5>OFFSIDES</h5>
            <span className="away-offsides-percentage">1</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="2"
              value="0"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="2"
              value="1"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="yellow-stats stats">
          <div className="stats-text">
            <span className="home-yellows-percentage">4</span>
            <h5>YELLOW CARDS</h5>
            <span className="away-yellows-percentage">2</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="5"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="5"
              value="2"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="red-stats stats">
          <div className="stats-text">
            <span className="home-red-percentage">0</span>
            <h5>RED CARDS</h5>
            <span className="away-red-percentage">0</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="1"
              value="0"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="1"
              value="0"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="gk-saves-stats stats">
          <div className="stats-text">
            <span className="home-gk-percentage">6</span>
            <h5>GOALKEEPER SAVES</h5>
            <span className="away-gk-percentage">4</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="7"
              value="6"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="7"
              value="4"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="passes-stats stats">
          <div className="stats-text">
            <span className="home-passes-percentage">281</span>
            <h5>TOTAL PASSES</h5>
            <span className="away-duels-percentage">198</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="300"
              value="281"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="300"
              value="198"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="accuracy-stats stats">
          <div className="stats-text">
            <span className="home-accuracy-percentage">82%</span>
            <h5>PASS ACCURACY</h5>
            <span className="away-accuracy-percentage">78%</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="100"
              value="82"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="100"
              value="78"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
        <div className="expected-stats stats">
          <div className="stats-text">
            <span className="home-expected-percentage">0.55</span>
            <h5>EXPECTED GOALS</h5>
            <span className="away-expected-percentage">0.25</span>
          </div>
          <div className="progress-bars">
            <progress
              className="home-team-duels"
              max="1"
              value="0.55"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
            <progress
              className="away-team-duels"
              max="1"
              value="0.25"
              style={{
                "--progress-color": Math.max(40, 60) === 40 ? "black" : "gray",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStats;
