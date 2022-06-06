import React from 'react'
import CoachingInfo from '../components/coaching-info'
import Navigation from '../components/navigation'
import Profile from '../components/profile'
import Overview from '../components/overview'
import './coaching.sass'

const CoachingPage = () => {
    return(
        <div className="page-wrapper">
            <Navigation />
            <div className="wrapper">
                <CoachingInfo />
                <Profile />
            </div>
            <Overview />
        </div>
    )
}

export default CoachingPage