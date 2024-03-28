import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Card from '../card'
import axios from 'axios'

function Detail() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  return (
    <div className="bg-gray-100 h-screen p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Movie Details</h1>
        <NavLink to={`/`} className="text-blue-500 hover:underline">Back to Movies</NavLink>
      </div>
      <div className="flex justify-center place-content-center items-center gap-3 mt-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="h-56 w-full overflow-hidden">
            <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.original_title} />
          </div>
          <div className="mt-4">
            <p className="text-gray-800 font-semibold">{data.original_title}</p>
            <p className="text-gray-600 mt-2">Release Date: {data.release_date}</p>
            <p className="text-gray-600">Vote Average: {data.vote_average}</p>
            <p className="text-gray-600">Overview: {data.overview}</p>
            <NavLink to={`/movies/${id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5">Play Movie</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
