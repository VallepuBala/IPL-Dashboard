import React from 'react'
import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    date,
    venue,
    result,
    man_of_the_match: manOfTheMatch,
    umpires,
    first_innings: firstInnings,
    second_innings: secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h2 className="latest-match-heading">Latest Match</h2>
      <div className="latest-match-details">
        <div className="team-info">
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
          <p className="match-innings">First Innings: {firstInnings}</p>
          <p className="match-innings">Second Innings: {secondInnings}</p>
        </div>
        <div className="team-logo-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <div className="match-info">
          <p className="match-info-text">
            <span>Man of the Match:</span> {manOfTheMatch}
          </p>
          <p className="match-info-text">
            <span>Umpires:</span> {umpires}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
