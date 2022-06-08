import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const SortingItem = (props) => {
    return(
        <div className="category-sorting-row">
            <div className="category-title-wrapper">
                <span className="category-sorting-title">{props.title}</span>
            </div>
            <div className="category-sorting-questions">
                <div className="chart-data green" style={{width: `${props.firstLabel}%`}}>
                    <span className="category-label">
                    {props.firstLabel}
                    </span>
                </div>
                <div className="chart-data orange" style={{width: `${props.secondLabel}%`}}>
                    <span className="category-label">
                    {props.secondLabel}
                    </span>
                </div>
                <div className="chart-data red" style={{width: `${props.thirdLabel}%`}}>
                    <span className="category-label">
                    {props.thirdLabel}
                    </span>
                </div>
            </div>
            <div className="category-right-wrapper">
                <div className="category-sorting-average">
                    {props.flag && <p>Average</p>}
                    <span>
                    {props.average}
                    </span>
                </div>
                <div className="category-sorting-data">
                    <AddIcon /> 
                    <span>Open Data</span>
                </div>
            </div>
        </div>
    )
}

export default SortingItem