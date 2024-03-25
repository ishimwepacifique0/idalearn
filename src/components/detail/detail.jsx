import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Card from '../card'

function Detail() {

    const {id} = useParams()
    console.log(id)
    const [data,setData] =  useState([])
    useEffect(()=>{
        const detailData = async()=>{
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
            console.log(respone)
            setData(respone.data)
        }
        detailData()
    },[])

    console.log(data)
    return (
        <p>
            <NavLink to={`/movies/${data.id}`}>
            <div className='w-24 h-24 bg-slate-500'>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='w-24 h-24' />
                <p>{data.original_title}</p>
            </div>
            </NavLink>
        </p>
    )
}

export default Detail
