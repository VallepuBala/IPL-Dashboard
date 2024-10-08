import React from 'react'
import './index.css'

const MatchCard = ({match}) => {
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    result,
    match_status: matchStatus,
  } = match

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatus.toLowerCase()}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
