import { createContext, useState } from "react";

import { teamsId } from "../utils/team-id";

export const TeamDataContext = createContext({
  allTeamData: [],
  setAllTeamData: () => {},
  leagueName: "",
  setLeagueName: () => {},
  teamId: {},
  setTeamId: () => {},
  date: "",
  setDate: () => {},
  nextMatches: "",
  setNextMatches: () => {},
});

export const TeamDataProvider = ({ children }) => {
  const [allTeamData, setAllTeamData] = useState([]);
  const [leagueName, setLeagueName] = useState("laliga");
  const [teamId, setTeamId] = useState(teamsId);
  const [date, setDate] = useState("");
  const [nextMatches, setNextMatches] = useState("");

  const value = {
    allTeamData,
    setAllTeamData,
    leagueName,
    setLeagueName,
    teamId,
    setTeamId,
    date,
    setDate,
    nextMatches,
    setNextMatches,
  };

  return (
    <TeamDataContext.Provider value={value}>
      {children}
    </TeamDataContext.Provider>
  );
};
