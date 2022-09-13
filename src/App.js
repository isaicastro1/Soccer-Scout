import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import ScoreTableLaLiga from "./Components/ScoreTableLaLiga/ScoreTableLaLiga";
import ScoreTablePrem from "./Components/ScoreTablePrem/ScoreTablePrem";

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
