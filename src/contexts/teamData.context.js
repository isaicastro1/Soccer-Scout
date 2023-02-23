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
  isMenuOpen: "",
  setIsMenuOpen: () => null,
});

export const TeamDataProvider = ({ children }) => {
  const [allTeamData, setAllTeamData] = useState([]);
  const [leagueName, setLeagueName] = useState("laliga");
  const [teamId, setTeamId] = useState(teamsId);
  const [date, setDate] = useState("");
  const [nextMatches, setNextMatches] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    isMenuOpen,
    setIsMenuOpen,
  };

  return (
    <TeamDataContext.Provider value={value}>
      {children}
    </TeamDataContext.Provider>
  );
};
