import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FetchMovies from '../components/fetchmovi/fetchMovies'
import Detailmovie from '../components/moviesDetail/detailmovie'
import Playvideo from '../components/moviesDetail/playvideo'

function AppRoutes() {
    return (
        <Routes>
            <Route  path='/movies' element={<FetchMovies />} />
            <Route path='/details/:id' element={<Detailmovie />} />
            <Route path='/playvideo/:id' element={<Playvideo />} />
        </Routes>
    )
}

export default AppRoutes
