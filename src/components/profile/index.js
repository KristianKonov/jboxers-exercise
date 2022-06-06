import React from 'react'
import Avatar from './../../images/avatar.png'
import './profile.sass'

const Profile = () => {
    return(
        <div className="profile">
            <img className="avatar" src={Avatar} />
            <div className="profile-info">
                <span>email@email.com</span>
                <span>Super Admin</span>
            </div>
            <div className="profile-nav">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile