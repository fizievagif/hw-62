import React from 'react';

const Home = () => {
  return (
    <div className="mt-3">
      <div>
        <h1>The most famous basketball player</h1>
        <p>LeBron James broke Kareem Abdul-Jabbar's record to lead NBA history in points in the regular season and playoffs</p>
        <p>The Los Angeles Lakers forward scored 26 points in a lost game against the Golden State Warriors (115:117) and came out on top in points in NBA history,
          including the regular season and playoffs. At the moment, James has 44.157 points (36,526 in the regular season and 7631 in the playoffs).
          The record was previously held by center Kareem Abdul-Jabbar with 44,149 points (38,387 in the regular season and 5,762 in the playoffs).</p>
      </div>
      <h3>Active player hof probability</h3>
      <table>
        <tr>
          <th>№</th>
          <th>Player name</th>
          <th>Probability </th>
        </tr>
        <tr>
          <td><strong>1.</strong></td>
          <td>LeBron James</td>
          <td>1.000</td>
        </tr>
      </table>
    </div>
  );
};

export default Home;