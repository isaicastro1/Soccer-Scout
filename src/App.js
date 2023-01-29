import NavBar from "./Components/NavBar/NavBar";
import FindLeague from "./routes/find-league/find-league";
import Home from "./routes/home/home";
import NextMatchesTable from "./Components/next-matches-table/next-matches-table.component";
import SignInForm from "./routes/sign-in-form/sign-in-form.component";
import SignUpForm from "./routes/sign-up-form/sign-up-form.component";
import Profile from "./routes/profile/profile.component";

import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="find-league" element={<FindLeague />} />
          <Route path="next-matches" element={<NextMatchesTable />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
