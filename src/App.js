import NavBar from "./Components/NavBar/NavBar";
import ScoreTableLaLiga from "./Components/ScoreTableLaLiga/ScoreTableLaLiga";
import ScoreTablePrem from "./Components/ScoreTablePrem/ScoreTablePrem";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />;
      <ScoreTableLaLiga />
      <ScoreTablePrem />
    </div>
  );
}

export default App;
