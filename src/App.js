import NavBar from "./Components/NavBar/NavBar";
import ScoreTable from "./Components/ScoreTable/ScoreTable";
import FindLeague from "./routes/find-league/find-league.component";
import Home from "./routes/home/home.component";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="laliga" element={<ScoreTable />} />
          <Route path="find-league" element={<FindLeague />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
