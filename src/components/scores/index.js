import React from 'react'
import './scores.sass'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const OverallScores = (props) => {
    return(
        <div className="score">
            <span className={props.grade === 'E' ? "score-grade gradeE" : props.grade === 'M' ? "score-grade gradeM" : props.grade === 'N' ? "score-grade gradeN" : "score-grade"}>{props.grade}</span>
            <AccountCircleIcon className="score-avatar" />
            <span className="score-students">{props.students} Students</span>
        </div>
    )
}

export default OverallScores