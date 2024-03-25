import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import FetchMoview from './components/fetchmovi/fetchMovies'
import { Routes,Route } from 'react-router-dom'
import Detail from './components/detail/detail'
import Fullmovies from './components/movies/fullmovies'




function App() {

  return (
    <Routes>
      <Route path="/" element={<FetchMoview />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/movies/:id" element={<Fullmovies />} />
    </Routes>

  )
}

export default App
