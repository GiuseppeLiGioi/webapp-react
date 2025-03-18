import MovieCard from "../components/MovieCard"
import ReviewCard from "../components/ReviewCard"
import axios from "axios"
import {useState, useEffect} from "react"
function HomePage () {

    const [movies, setMovies] = useState( [] )
    //funzione fetch per i film
    const fetchMovies = () => {
        console.log("fetching movies...")

        axios.get("http://localhost:3000/movies")
        .then(res => {setMovies(res.data)})
        .catch(err => console.log(err))
    }

    useEffect(fetchMovies, []);


    //per non utilizzare il .map all'interno del return posso creare una funzione renderMovies.
    const renderMovies = () => {
        return (
            movies.map( (movie) => {
                return(
                   <div className="col" key={movie.id}>
                    <MovieCard  movie={movie}/>

                   </div> 
                )
            })
        )
    }

    return(
        <>
        <h2 className="text-danger">Qui andranno tutti i FILM!</h2>
        <div className="row row-cols-3">
            { renderMovies() }
        
        

        </div>
        
        </>
        
    )
}

export default HomePage;