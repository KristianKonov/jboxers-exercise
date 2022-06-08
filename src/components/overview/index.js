import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OverallScores from '../scores';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Chart } from "react-google-charts";


var studentsE = 259
var studentsM = 68
var studentsN = 18

export const data = [
    ["", ""],
    ["Students E", studentsE],
    ["Students M", studentsM],
    ["Students N", studentsN],
    ["", (studentsE + studentsM + studentsN)],
];

export const options = {
    pieHole: 0.8,
    legend: "none",
    pieSliceText: 'none',
    pieStartAngle: 270,
    backgroundColor: 'transparent',
    is3D: false,
    hAxis: { textPosition: 'none' },
    slices: {
        0: { color: "green" },
        1: { color: "orange" },
        2: { color: "red" },
        3: { color: "transparent" },
    }
};

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
                <div className="category-link-wrapper">
                    <span>View StoryFile</span>
                    <ArrowForwardIcon />
                </div>
            </div>
            <div className="category-column">
                <h3 className="category-subtitle">Overall Scores</h3>
                <OverallScores students={studentsE} grade={"E"} />
                <OverallScores students={studentsM} grade={"M"} />
                <OverallScores students={studentsN} grade={"N"} />
            </div>
            <div className="category-chart">
                <div className="category-chart-wrapper">
                    <Chart
                        className="chart"
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"400px"}
                        height={"400px"}
                    />
                </div>
                <div className="chart-text">
                    <p>Overall Averages</p>
                    <span>86%</span>
                </div>
            </div>
        </div>
    )
}

export default Overview