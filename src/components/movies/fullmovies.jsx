import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube-iframe';

function Fullmovies() {
    const { id } = useParams();
    const [movieKey, setMovieKey] = useState('');


    useEffect(() => {

        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`);
                if (response.data.results && response.data.results.length > 0) {
                    setMovieKey(response.data.results[0].key);
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovieData();
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-4xl h-full ">
                {movieKey ? (
                    <YouTubeIframe videoId={"LIWQHh92Xsg"} className="w-full h-full" />
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>

        </div>
    );
}

export default Fullmovies;
