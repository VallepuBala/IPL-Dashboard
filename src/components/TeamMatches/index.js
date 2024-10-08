import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamDetails, setTeamDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeamDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()
      setTeamDetails(data)
      setIsLoading(false)
    }
    fetchTeamDetails()
  }, [id])

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <>
          <img
            src={teamDetails.team_banner_url}
            alt="team banner"
            className="team-banner"
          />
          <LatestMatch latestMatchDetails={teamDetails.latest_match_details} />
          <ul className="matches-list">
            {teamDetails.recent_matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default TeamMatches
