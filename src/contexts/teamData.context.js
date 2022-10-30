import { createContext, useState } from "react";

export const TeamDataContext = createContext({
  allTeamData: [],
  setAllTeamData: () => {},
});

export const TeamDataProvider = ({ children }) => {
  const [allTeamData, setAllTeamData] = useState([]);

  const value = { allTeamData, setAllTeamData };

  return (
    <TeamDataContext.Provider value={value}>
      {children}
    </TeamDataContext.Provider>
  );
};
