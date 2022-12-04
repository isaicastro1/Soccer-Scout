import { useEffect, useContext } from "react";

import { TeamDataContext } from "../../contexts/teamData.context";
import MatchPreview from "../../Components/match-preview/match-preview.component";
import { options } from "../../utils/options";
import { getDate } from "../../utils/date";

import "./nextMatches.styles.scss";

const NextMatches = () => {
  const { nextMatches, setNextMatches } = useContext(TeamDataContext);

  // useEffect(() => {
  //   const getNextMatches = async () => {
  //     const response2 = await fetch(
  //       `https://v3.football.api-sports.io/fixtures?season=2022&league=2&from=${getDate()}&to=2023-06-30`,
  //       options
  //     );
  //     const data2 = await response2.json();
  //     setNextMatches(data2.response);
  //     console.log("data", data2);
  //   };
  //   getNextMatches();
  // }, []);

  // console.log("next matches", nextMatches);

  return (
    <div className="matches-container">
      <MatchPreview />
      <MatchPreview />
      {/* <MatchPreview />
      <MatchPreview /> */}
      {/* {nextMatches &&
        nextMatches.map((match) => (
          <h2
            style={{ color: "white" }}
          >{`${match.teams.away.name} vs ${match.teams.home.name}`}</h2>
        ))} */}
    </div>
  );
};

export default NextMatches;
