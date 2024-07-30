import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Card from '../card'

function Detailmovie() {

    const {id} = useParams()
    const [data,setData] = useState('')
    useEffect(()=>{
        const getMoreDetail = async() =>{
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
                console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getMoreDetail()
    },[])

    console.log(data)

    return (
        <div className='flex justify-center w-full'>
            <NavLink  to={`/playvideo/${data.id}`}>
            <Card title={data.original_title} src={`https://image.tmdb.org/t/p/w500${data.poster_path}` }/>
            </NavLink>
        </div>
    )
}

export default Detailmovie
