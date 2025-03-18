import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import ReviewCard from "../components/ReviewCard";

function MoviesPage () {

    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        console.log("fetching movie...")

        axios.get(`http://localhost:3000/movies/${id}`)
        .then (res => {setMovie(res.data)})
        .catch(err => console.error(err))
    }

    useEffect(fetchMovie, [id]);

    //come ho fatto primka creo la funzione renderMovie
    const renderReviews = () => {
       
        if (!movie.reviews || movie.reviews.length === 0) {
            return <p>No reviews available</p>;
        } else {
           
            return movie.reviews.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
            });
        }
    };
    


    return(
        <>
        <h1>{movie.title}</h1>
        <section>
            <h1>Our community reviews</h1>
            {renderReviews()}
           

        </section>
        
        </>
        
    )
}

export default MoviesPage;