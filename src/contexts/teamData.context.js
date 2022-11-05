import { createContext, useState } from "react";

export const TeamDataContext = createContext({
  allTeamData: [],
  setAllTeamData: () => {},
  leagueName: "",
  setLeagueName: () => {},
  uclData: [],
  setUclData: () => {},
});

export const TeamDataProvider = ({ children }) => {
  const [allTeamData, setAllTeamData] = useState([]);
  const [leagueName, setLeagueName] = useState("");
  const [uclData, setUclData] = useState("");

  const value = {
    allTeamData,
    setAllTeamData,
    leagueName,
    setLeagueName,
    uclData,
    setUclData,
  };

  return (
    <TeamDataContext.Provider value={value}>
      {children}
    </TeamDataContext.Provider>
  );
};
