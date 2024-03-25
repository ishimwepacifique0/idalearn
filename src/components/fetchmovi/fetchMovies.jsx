import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card'
import { NavLink } from 'react-router-dom'


function FetchMoview() {
  const [count, setCount] = useState([])

  const diply = () => {
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

  console.log(count)
  return (

    <div className='flex justify-center place-content-center items-center gap-3'>
      {count.map((items, index) => {
        return (
            <NavLink to={`/detail/${items.id}`}>
                <Card title={items.original_title} price={items.vote_average} vote={items.vote_count}  src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} key={index}/>
            </NavLink>
        )
        // return <Card title={items.original_title} price={items.vote_average} vote={items.vote_count} src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} key={index}/>
      })}

      <button className='bg-slate-400' onClick={() => { diply() }}>Display</button>

    </div>
  )
}

export default FetchMoview
