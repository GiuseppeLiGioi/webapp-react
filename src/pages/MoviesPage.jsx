import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react";

function MoviesPage () {

    const { setIsLoading } = useContext(GlobalContext);

    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        console.log("fetching movie...")
        setIsLoading(true)

        axios.get(`http://localhost:3000/movies/${id}`)
        .then ((res) => setMovie(res.data))
        .catch((err) => console.error(err))
        .then(() => setIsLoading(false))
    }

    useEffect(fetchMovie, [id]);

    //come ho fatto prima creo la funzione renderReviews
    const renderReviews = () => {
        return movie.reviews?.map((review)=>{
            return <ReviewCard key={movie.id} review={review} />
        })
    };
    


    return(
        <>
        <h1>{movie.title}</h1>
        <section>
            <h1>Our community reviews</h1>
            {renderReviews()}
        </section>

        {/*formReview*/}
        <section>
            {movie?.id && <ReviewForm movie_id={movie.id} reloadReview={fetchMovie} />}
        </section>
        
        </>
        
    )
}

export default MoviesPage;