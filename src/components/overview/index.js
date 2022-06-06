import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OverallScores from '../scores';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Overview = () => {
    return(
        <div className="overview-box">
            <h2 className="category-title"><EmojiEventsIcon /> Overview</h2>
            <div className="category-column">
                <h3 className="category-subtitle">Students</h3>
                <h1>1,240 <AccountCircleIcon /></h1>
            </div>
            <div className="category-column">
                <div className="category-row">
                    <h3 className="category-subtitle">Rubric Topic</h3>
                    <span>Interactions</span>
                </div>
                <ol>
                    <li>Goals<span>250</span></li>
                    <li>Reality<span>33</span></li>
                    <li>Obsticals<span>210</span></li>
                    <li>Way Forward<span>98</span></li>
                </ol>
            </div>
            <div className="category-column">
                <h3 className="category-subtitle">Overall Scores</h3>
                <OverallScores students={259} grade={"E"} />
                <OverallScores students={68} grade={"M"} />
                <OverallScores students={5} grade={"N"} />
            </div>
        </div>
    )
}

export default Overview