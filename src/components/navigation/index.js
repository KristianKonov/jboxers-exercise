import React from 'react'
import './navigation.sass'

const Navigation = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#">Learning</a></li>
                    <li><a href="#">Activities</a></li>
                    <li><a href="#">Coaching</a></li>
                </ul>
            </nav>
            <div className="nav-searchbox">
                <input type="search" />
            </div>
        </header>
    )
}

export default Navigation