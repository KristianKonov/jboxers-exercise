import React from 'react'
import './notfound.sass'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <div className="App">
            <header className="App-header">    
                <h2>Page not found.</h2>
                <h4>Navigate to <Link to='/'>here.</Link></h4>
            </header>
        </div>
    )
}

export default NotFoundPage