import { useEffect, useState } from "react";

import Trophy from "../../Assets/trophy.png";
import Shield from "../../Assets/shield.png";

import "./match-preview.styles.scss";

const MatchPreview = ({ game }) => {
  const [teamWon, setTeamWon] = useState("tie");
  const [matchEnded, setMatchEnded] = useState(false);
  const [homeTeamLogo, setHomeTeamLogo] = useState(Shield);
  const [awayTeamLogo, setAwayTeamLogo] = useState(Shield);

  // console.log(game);

  const {
    awayTeam: { image: awayLogo, name: awayName, score: awayScore },
    homeTeam: { image: homeLogo, name: homeName, score: homeScore },
    timePeriod,
  } = game.matchCards[0];

  // const {
  //   fixture: {
  //     id,
  //     date,
  //     status: { elapsed: minutes, long: live },
  //   },
  //   league: { round },
  //   teams: {
  //     home: { name: teamOneName, logo: teamOneLogo },
  //     away: { name: teamTwoName, logo: teamTwoLogo },
  //   },
  //   goals: { home: homeGoals, away: awayGoals },
  // } = game;

  // let time = new Date(date)
  //   .toLocaleString()
  //   .split("")
  //   .splice(10, 12)
  //   .join("")
  //   .replace(":00", "");

  // useEffect(() => {
  //   const determineWinner = (homeGoals, awayGoals) => {
  //     if (live === "Match Finished") {
  //       setMatchEnded(true);
  //     }

  //     if (homeGoals > awayGoals) {
  //       setTeamWon("home");
  //     } else if (homeGoals < awayGoals) {
  //       setTeamWon("away");
  //     } else {
  //       return "tie";
  //     }
  //   };

  //   determineWinner(homeGoals, awayGoals);
  // }, [homeGoals, awayGoals, live]);

  // const {
  //   awayTeam: { image: awayLogo, name: awayName, score: awayScore },
  //   homeTeam: { image: homeLogo, name: homeName, score: homeScore },
  //   timePeriod,
  // } = game.matchCards[0];

  return (
    <div className="match-preview-container">
      {timePeriod}
      <div style={{ display: "flex" }}>
        <img style={{ width: "20px" }} src={awayLogo} />
        <p>{awayName}</p>
        <p>{awayScore}</p>
      </div>
      <div style={{ display: "flex" }}>
        <img style={{ width: "20px" }} src={homeLogo} />
        <p>{homeName}</p>
        <p>{homeScore}</p>
      </div>
      {/* <h3 className="match-game">{round}</h3>
      <div className="team-logos">
        <div className="team-logo-container">
          <div className="team-name">
            {teamWon === "home" && matchEnded ? (
              <div className="winner">
                <img src={Trophy} style={{ height: "30px" }} alt="trophy" />
              </div>
            ) : (
              <></>
            )}
            <h5 className="team-one-name">{teamOneName}</h5>
          </div>
          <img
            className="team-logo"
            src={homeTeamLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setHomeTeamLogo(teamOneLogo)}
          />
        </div>
        <div className="time">
          {live === "Not Started" || live === "Time to be defined" ? (
            <span className="match-time">{time}</span>
          ) : live === "Match Finished" ? (
            <span className="match-time">FT</span>
          ) : live === "Halftime" ? (
            <div className="match-time">
              <span className="live-dot">HT</span>
            </div>
          ) : live === "Match Postponed" ? (
            <span className="match-time">Postponed</span>
          ) : (
            <div className="match-time">
              <span className="live-dot">{minutes}'</span>
            </div>
          )}
          <div className="match-result">
            {homeGoals !== null || awayGoals !== null ? (
              <>
                <div className="home-goals">{homeGoals}</div>
                <span>-</span>
                <div className="away-goals">{awayGoals}</div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="team-logo-container">
          <img
            className="team-logo"
            src={awayTeamLogo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            onLoad={() => setAwayTeamLogo(teamTwoLogo)}
          />
          <div className="team-name">
            {teamWon === "away" && matchEnded ? (
              <div className="winner">
                <img src={Trophy} style={{ height: "30px" }} alt="trophy" />
              </div>
            ) : (
              <></>
            )}
            <h5 className="team-two-name">{teamTwoName}</h5>
          </div>
        </div>
      </div>
      <div className="see-more" id="see-more">
        see more
      </div> */}
    </div>
  );
};

export default MatchPreview;

// {
//   "containers": [
//     {
//       "uiKey": "582d241",
//       "fullWidth": {
//         "component": {
//           "uiKey": "23d7fbe",
//           "googleAdsPlaceholder": {
//             "divId": "div-gpt-ad-1669807366587-0",
//             "adUnitPath": "/38577695/Web_Matches_Feed/Web_Matches_Stream_1_Code/Desktop_MS_1_Code",
//             "generalSizes": {
//               "desktop": [
//                 {
//                   "minWidth": 728,
//                   "minHeight": 90
//                 }
//               ]
//             },
//             "targetingKeywords": [
//               {
//                 "key": "env",
//                 "value": [
//                   "production"
//                 ]
//               },
//               {
//                 "key": "fvc",
//                 "value": [
//                   "1200"
//                 ]
//               },
//               {
//                 "key": "flt",
//                 "value": [
//                   "21",
//                   "5",
//                   "18",
//                   "61"
//                 ]
//               }
//             ],
//             "hasBackground": true
//           }
//         }
//       }
//     },
//     {
//       "uiKey": "6cd4025",
//       "fullWidth": {
//         "component": {
//           "uiKey": "2a4acc6",
//           "datePicker": {
//             "currentDate": "2023-02-16",
//             "queryParam": "date",
//             "label": "Select a date:",
//             "sinceDate": "2021-02-14",
//             "untilDate": "2025-02-14",
//             "trackingEvents": [
//               {
//                 "type": "EVENT_CLICK",
//                 "name": "DateChange",
//                 "serverParameters": {
//                   "date_current": "+1",
//                   "stream_name": "MatchesAll",
//                   "url": "https://onefootball.com/en/matches?date=2023-02-16"
//                 },
//                 "trackers": [
//                   {
//                     "type": "TRACKER_LOCALYTICS"
//                   }
//                 ]
//               }
//             ]
//           }
//         }
//       }
//     },
//     {
//       "uiKey": "63dfdde",
//       "fullWidth": {
//         "component": {
//           "uiKey": "37a61a0",
//           "sectionHeader": {
//             "title": "Matches",
//             "subtitle": "Thursday, 16 February 2023"
//           }
//         }
//       }
//     },
//     {
//       "uiKey": "cd9d4f1",
//       "fullWidth": {
//         "component": {
//           "uiKey": "eedfc75",
//           "matchCardsList": {
//             "matchCards": [
//               {
//                 "uiKey": "9a5dfe9",
//                 "link": "/en/match/2347885",
//                 "kickoff": "2023-02-16T17:45:00Z",
//                 "period": "PRE_MATCH",
//                 "homeTeam": {
//                   "image": "https://images.onefootball.com/icons/teams/164/5.png",
//                   "name": "Barcelona",
//                   "isNational": "false",
//                   "imageObject": {
//                     "path": "https://images.onefootball.com/icons/teams/164/5.png",
//                     "alt": "Icon: Barcelona"
//                   }
//                 },
//                 "awayTeam": {
//                   "image": "https://images.onefootball.com/icons/teams/164/21.png",
//                   "name": "Manchester United",
//                   "isNational": "false",
//                   "imageObject": {
//                     "path": "https://images.onefootball.com/icons/teams/164/21.png",
//                     "alt": "Icon: Manchester United"
//                   }
//                 },
//                 "trackingEvents": [
//                   {
//                     "type": "EVENT_CLICK",
//                     "name": "MatchItemClicked",
//                     "serverParameters": {
//                       "away_team_id": "21",
//                       "away_team_name": "Manchester United",
//                       "competition_id": "7",
//                       "competition_name": "Europa League",
//                       "home_team_id": "5",
//                       "home_team_name": "Barcelona",
//                       "match_id": "2347885",
//                       "match_name": "Barcelona - Manchester United",
//                       "match_position": "1",
//                       "match_state": "PreMatch",
//                       "matchcard_type": "Regular",
//                       "minute_of_the_match": "0",
//                       "stream_name": "MatchesAll",
//                       "url": "https://onefootball.com/en/matches?date=2023-02-16"
//                     },
//                     "trackers": [
//                       {
//                         "type": "TRACKER_LOCALYTICS"
//                       }
//                     ]
//                   }
//                 ],
//                 "matchId": "2347885",
//                 "kickoffFormatted": "16/02/2023",
//                 "kickoffTimeFormatted": "10:45",
//                 "refreshId": "915ecfd"
//               },
//               {
//                 "uiKey": "3cfec77",
//                 "link": "/en/match/2347889",
//                 "kickoff": "2023-02-16T17:45:00Z",
//                 "period": "PRE_MATCH",
//                 "homeTeam": {
//                   "image": "https://images.onefootball.com/icons/teams/164/341.png",
//                   "name": "Ajax",
//                   "isNational": "false",
//                   "imageObject": {
//                     "path": "https://images.onefootball.com/icons/teams/164/341.png",
//                     "alt": "Icon: Ajax"
//                   }
//                 },
//                 "awayTeam": {
//                   "image": "https://images.onefootball.com/icons/teams/164/174.png",
//                   "name": "1. FC Union Berlin",
//                   "isNational": "false",
//                   "imageObject": {
//                     "path": "https://images.onefootball.com/icons/teams/164/174.png",
//                     "alt": "Icon: 1. FC Union Berlin"
//                   }
//                 },
//                 "trackingEvents": [
//                   {
//                     "type": "EVENT_CLICK",
//                     "name": "MatchItemClicked",
//                     "serverParameters": {
//                       "away_team_id": "174",
//                       "away_team_name": "1. FC Union Berlin",
//                       "competition_id": "7",
//                       "competition_name": "Europa League",
//                       "home_team_id": "341",
//                       "home_team_name": "Ajax",
//                       "match_id": "2347889",
//                       "match_name": "Ajax - 1. FC Union Berlin",
//                       "match_position": "2",
//                       "match_state": "PreMatch",
//                       "matchcard_type": "Regular",
//                       "minute_of_the_match": "0",
//                       "stream_name": "MatchesAll",
//                       "url": "https://onefootball.com/en/matches?date=2023-02-16"
//                     },
//                     "trackers": [
//                       {
//                         "type": "TRACKER_LOCALYTICS"
//                       }
//                     ]
//                   }
//                 ],
//                 "matchId": "2347889",
//                 "kickoffFormatted": "16/02/2023",
//                 "kickoffTimeFormatted": "10:45",
//                 "refreshId": "d2bb22b"
//               },
//             ],
//             "link": {
//               "name": "Go to standings",
//               "urlPath": "/en/competition/europa-league-7/table"
//             },
//             "sectionHeader": {
//               "title": "Europa League",
//               "subtitle": "Playoff 1st leg",
//               "entityLink": {
//                 "name": "Europa League",
//                 "urlPath": "/en/competition/europa-league-7"
//               },
//               "entityLogo": {
//                 "path": "https://images.onefootball.com/icons/leagueColoredCompetition/128/7.png",
//                 "alt": "Logo: Europa League"
//               }
//             }
//           }
//         }
//       }
//     }
//   ],
//   "pageTitle": "Today’s Football Matches | OneFootball"
// }
