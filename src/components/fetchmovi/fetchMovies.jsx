import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card'
import { NavLink } from 'react-router-dom'

function FetchMovies() {
  const [count, setCount] = useState([])

  const display = () => {
    console.log("hello world")
  }

  useEffect(() => {
    fetchNowPlaying()
  }, [])

  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=5c291c5c3ce259fccb18540798c90d70')
      setCount(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-100 h-screen p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Now Playing Movies</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5" onClick={display}>Display</button>
        <NavLink to={'/login'}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5" onClick={display}>Create account</button>
        </NavLink>
      </div>
      <div className="grid lg:grid-cols-5 justify-center place-content-center items-center gap-3 mt-10">
        {count.map((items, index) => {
          return (
            <NavLink to={`/detail/${items.id}`} key={index}>
              <Card title={items.original_title} price={items.vote_average} vote={items.vote_count} src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} />
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default FetchMovies