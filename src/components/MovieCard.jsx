import {Link} from 'react-router-dom'

function MovieCard (){
    return(
        <>
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">
                    Titolo libro
                </h5>
                <span>Author</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero nisi repellat tempore beatae reprehenderit eos nobis 
                    voluptatum cumque eaque amet sit totam temporibus voluptatem deleniti 
                    iure neque necessitatibus, ea vitae!
                </p>

                <Link to={'/'}>Read More!</Link>


            </div>

        </div>
        
        
        </>
    )
}
export default MovieCard;