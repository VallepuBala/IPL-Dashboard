import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({team}) => {
  const {id, name, team_image_url: teamImageUrl} = team
  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
