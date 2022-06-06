import React from 'react'
import CoachingInfo from '../components/coaching-info'
import Navigation from '../components/navigation'
import Profile from '../components/profile'
import './coaching.sass'

const CoachingPage = () => {
    return(
        <div className="page-wrapper">
            <Navigation />
            <CoachingInfo />
            <Profile />
        </div>
    )
}

export default CoachingPage