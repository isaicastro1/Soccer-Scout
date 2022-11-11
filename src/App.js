import NavBar from "./Components/NavBar/NavBar";
import FindLeague from "./routes/find-league/find-league";
import Home from "./routes/home/home";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="find-league" element={<FindLeague />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
