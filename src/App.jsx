import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import FetchMoview from './components/fetchmovi/fetchMovies'
import { Routes,Route } from 'react-router-dom'
import Detail from './components/detail/detail'
import Fullmovies from './components/movies/fullmovies'
import Login from './components/authentication/login'
import SignUp from './components/authentication/signup'
import Detailmovie from './components/moviesDetail/detailmovie'
import AppRoutes from './routes/appRoutes'
import ModaContext from '../context/modalContext'




function App() {

  return (
    <ModaContext>
      <AppRoutes />
    </ModaContext>
  )
}

export default App
