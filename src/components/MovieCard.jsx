import {Link} from 'react-router-dom'

function MovieCard ( {movie} ){
    const {id, title, author, abstract, image} = movie;
    return(
        <>
        <div className="card mb-4">
            <div className="card-body">
            {/*<img src={image} alt={title}></img> non presente link di img nel db.*/}
                <h5 className="card-title">
                    {title}
                </h5>
                <span>{author}</span>
                <p>
                    {abstract}
                </p>
                

                <Link to={`/movies/${id}`}>Read More!</Link>


            </div>

        </div>
        
        
        </>
    )
}
export default MovieCard;