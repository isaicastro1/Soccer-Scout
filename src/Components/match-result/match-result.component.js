export const MatchResult = ({ homeScore, awayScore }) => {
  return (
    <div className="match-result">
      <div className="home-goals">{homeScore}</div>
      <span>-</span>
      <div className="away-goals">{awayScore}</div>
    </div>
  );
};
