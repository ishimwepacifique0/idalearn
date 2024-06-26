import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube-iframe';


function Fullmovies() {
    const {id} = useParams()
    const [movieKey,setMoviekey] = useState([])

        const handlelogou = ()=>{
            localStorage.clear()
            window.location.href="/"
        }

    useEffect(() =>{

        const ifuserisloggedin = ()=>{
            const userdata = localStorage.getItem("userdata")
            if(userdata == null) {
                window.location.href="/login"
        }
        }

        ifuserisloggedin()


        const moviesData = async()=>{
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
            console.log(respone.data.results[0])
            setMoviekey(respone.data.results[0])
        }
        moviesData()
    },[]);
    console.log(movieKey.key)
    return (
        <p>
            <YouTubeIframe videoId={`${movieKey.key}`} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5" onClick={handlelogou}>Logout</button>
        </p>
    )
}

export default Fullmovies
