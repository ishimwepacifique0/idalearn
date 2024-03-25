import React from 'react'

function Card({title,price,vote,src,popula}) {
    return (
        <div>
            <div className='w-24 h-24 bg-slate-500'>
                <img src={src} className='w-24 h-24' />
                <p>{title}</p>
                <p>{price}</p>
                <p>{vote}</p>
                <p>{popula}</p>
            </div>
        </div>
    )
}

export default Card
