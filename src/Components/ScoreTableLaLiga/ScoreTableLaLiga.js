import "./ScoreTable.css";
function ScoreTable() {
  return (
    <div className="la-liga">
      <div className="league-table">
        <header>
          <h1>La Liga Standings</h1>
        </header>
        <table className="standings">
          <thead>
            <tr>
              <th scope="col" className="left" title="team">
                TEAM
              </th>
              <th scope="col" className="right" title="GP">
                GP
              </th>
              <th scope="col" className="right" title="W">
                W
              </th>
              <th scope="col" className="right" title="D">
                D
              </th>
              <th scope="col" className="right" title="L">
                L
              </th>
              <th scope="col" className="right" title="GD">
                GD
              </th>
              <th scope="col" className="right" title="P">
                P
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Real Madrid
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">4</td>
              <td className="right">0</td>
              <td className="right">0</td>
              <td className="right">+7</td>
              <td className="right">12</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Barcelona
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">3</td>
              <td className="right">1</td>
              <td className="right">0</td>
              <td className="right">+10</td>
              <td className="right">10</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Villarreal
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">3</td>
              <td className="right">1</td>
              <td className="right">0</td>
              <td className="right">+9</td>
              <td className="right">10</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Real Betis
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">3</td>
              <td className="right">0</td>
              <td className="right">1</td>
              <td className="right">+4</td>
              <td className="right">9</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Osasuna
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">3</td>
              <td className="right">0</td>
              <td className="right">1</td>
              <td className="right">+3</td>
              <td className="right">9</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Athletic Club
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">2</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">+4</td>
              <td className="right">7</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Atletico Madrid
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">2</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">+2</td>
              <td className="right">7</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Celta Vigo
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">2</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">+1</td>
              <td className="right">7</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Real Sociedad
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">2</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">-1</td>
              <td className="right">7</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Valencia
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">2</td>
              <td className="right">0</td>
              <td className="right">2</td>
              <td className="right">+3</td>
              <td className="right">6</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Mallorca
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">1</td>
              <td className="right">+1</td>
              <td className="right">5</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Girona
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">0</td>
              <td className="right">4</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Almería
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">-1</td>
              <td className="right">4</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Rayo Vallecano
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">-1</td>
              <td className="right">4</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Espanyol
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">-3</td>
              <td className="right">4</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Real Valladolid
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">1</td>
              <td className="right">1</td>
              <td className="right">2</td>
              <td className="right">-6</td>
              <td className="right">4</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Sevilla
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">0</td>
              <td className="right">1</td>
              <td className="right">3</td>
              <td className="right">-5</td>
              <td className="right">1</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Elche
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">0</td>
              <td className="right">1</td>
              <td className="right">3</td>
              <td className="right">-8</td>
              <td className="right">1</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Getafe
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">0</td>
              <td className="right">1</td>
              <td className="right">3</td>
              <td className="right">-9</td>
              <td className="right">1</td>
            </tr>
            <tr className="">
              <td className="team-name">
                <a href="#" name="">
                  Cádiz
                </a>
              </td>
              <td className="right">4</td>
              <td className="right">0</td>
              <td className="right">0</td>
              <td className="right">4</td>
              <td className="right">-10</td>
              <td className="right">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScoreTable;
