import React from 'react'

function Card({ title, price, vote, src, popularity }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="h-56 w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={src} alt={title} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-gray-800 font-semibold">{title}</p>
          <p className="text-gray-600 mt-2">{price}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-600">{vote}</p>
          <p className="text-gray-600">{popularity}</p>
        </div>
      </div>
    </div>
  )
}

export default Card