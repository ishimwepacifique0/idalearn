import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import YouTubeIframe from 'react-youtube-iframe'

function Playvideo() {

    const [data,setData] = React.useState('') 
    const {id} = useParams()
    useEffect(()=>{
        const playVid = async () =>{
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
                console.log(response.data)
                setData(response.data?.results[0])
            } catch (error) {
                console.log(error)
            }
        }
        playVid()
    },[])

    console.log(data)

    return (
        <div>
            <YouTubeIframe
            videoId={`${data.key}`}
            />
        </div>
    )
}

export default Playvideo
