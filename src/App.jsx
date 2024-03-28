import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import FetchMoview from './components/fetchmovi/fetchMovies'
import { Routes,Route } from 'react-router-dom'
import Detail from './components/detail/detail'
import Fullmovies from './components/movies/fullmovies'
import Login from './components/authentication/login'
import SignUp from './components/authentication/signup'




function App() {

  return (
    <Routes>
      <Route path="/" element={<FetchMoview />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/movies/:id" element={<Fullmovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>

  )
}

export default App
