import NavBar from "./Components/NavBar/NavBar";
import FindLeague from "./routes/find-league/find-league";
import Home from "./routes/home/home";
import NextMatches from "./routes/next-matches/nextMatches.component";
import Authentication from "./routes/authentication/authentication.component";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="find-league" element={<FindLeague />} />
          <Route path="next-matches" element={<NextMatches />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
