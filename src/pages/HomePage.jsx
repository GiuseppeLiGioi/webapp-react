import MovieCard from "../components/MovieCard"
import ReviewCard from "../components/ReviewCard"

function HomePage () {
    return(
        <>
        <h2 className="text-danger">HomePage!</h2>
        <div className="row row-cols-3">
        <MovieCard />
         

        </div>
        
        </>
        
    )
}

export default HomePage;