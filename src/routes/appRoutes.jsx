import { Route, Routes } from 'react-router-dom'
import FetchMovies from '../components/fetchmovi/fetchMovies'
import Detailmovie from '../components/moviesDetail/detailmovie'
import Playvideo from '../components/moviesDetail/playvideo'
import Login from '../components/authentication/login'
import SignUp from '../components/authentication/signup'
import Todo from '../datainsert/datasave'

function AppRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Todo />} />
            <Route  path='/movies' element={<FetchMovies />} />
            <Route path='/details/:id' element={<Detailmovie />} />
            <Route path='/playvideo/:id' element={<Playvideo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<SignUp />} />
        </Routes>
    )
}

export default AppRoutes
