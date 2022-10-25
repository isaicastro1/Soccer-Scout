import NavBar from "./Components/NavBar/NavBar";
import ScoreTableLaLiga from "./Components/ScoreTableLaLiga/ScoreTableLaLiga";
import ScoreTablePrem from "./Components/ScoreTablePrem/ScoreTablePrem";
import Home from "./routes/Home/Home";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="laliga" element={<ScoreTableLaLiga />} />
          <Route path="premier" element={<ScoreTablePrem />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
