

function ReviewCard ( {review} ){
    const {id, name, vote, text } = review;
    return(
        <>

        <div key={id} className="card mb-4">
            <div className="card-body">
                <h5>{name}</h5>
                <p>
                    {text}
                </p>
                <span>Voto:{vote}</span>

            </div>
            

        </div>
       
        
        
        </>
    )
}
export default ReviewCard;