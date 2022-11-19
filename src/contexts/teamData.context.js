import { createContext, useState } from "react";

export const TeamDataContext = createContext({
  allTeamData: [],
  setAllTeamData: () => {},
  leagueName: "",
  setLeagueName: () => {},
  teamId: {},
  setTeamId: () => {},
});

const allId = {
  "Real Madrid": 86,
  Barcelona: 83,
  "Athletico Madrid": 1068,
  "Real Sociedad": 89,
  "Athletic Club": 93,
  "Real Betis": 244,
  Osasuna: 97,
  Villareal: 102,
  "Rayo Vallecano": 101,
  Valencia: 94,
  "Real Valladolid": 95,
  Mallorca: 84,
  Almeria: 102,
  Espanyol: 88,
  "Celta Vigo": 85,
  Girona: 9812,
  Getafe: 2922,
  Sevilla: 243,
  Cadiz: 3842,
  Elche: 3751,
  Arsenal: 359,
  "Manchester City": 382,
  "Tottenham Hotspur": 367,
  "NewCastle United": 361,
  "Manchester United": 360,
  Chelsea: 363,
  Fulham: 370,
  "Brighton Hove Albion": 331,
  Liverpool: 364,
  "Crystal Palace": 384,
  Brentford: 337,
  Everton: 368,
  "West Ham United": 371,
  "AFC Bournemouth": 349,
  "Leeds United": 357,
  "Aston Villa": 362,
  Southampton: 376,
  "Leicester City": 375,
  "Wolverhampton Wanderers": 380,
  "Nottingham Forest": 393,
};

export const TeamDataProvider = ({ children }) => {
  const [allTeamData, setAllTeamData] = useState([]);
  const [leagueName, setLeagueName] = useState("");
  const [teamId, setTeamId] = useState(allId);

  const value = {
    allTeamData,
    setAllTeamData,
    leagueName,
    setLeagueName,
    teamId,
    setTeamId,
  };

  return (
    <TeamDataContext.Provider value={value}>
      {children}
    </TeamDataContext.Provider>
  );
};
