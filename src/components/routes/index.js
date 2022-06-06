import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoachingPage from '../../pages/coaching'
import NotFoundPage from '../not-found'

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={
                <>
                    <CoachingPage />
                </>
                } />
                <Route path='*' element={
                    <NotFoundPage />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes