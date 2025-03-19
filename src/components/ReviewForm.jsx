import axios from "axios"
import { useState } from "react";

function ReviewForm ({movie_id, reloadReview}) {

    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`


    const initialValue = {
        name: "",
        text: "",
        vote: ""

    };

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il comportamento di refresh della pagina
    
        axios
          .post(endpoint, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            setFormData(initialValue); // Resetta il form
            reloadReview(); // Ricarica le recensioni
          })
          .catch((err) => {
            console.error(err);
          });
    };


    const setFieldValue = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        }

        )

    }


    return (
        <>
            <div className="card">
                <h5>Add Reviews</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="inserisci il tuo nome"
                                value={formData.name}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Text</label>
                            <textarea
                                name="text"
                                className="form-control"
                                placeholder="inserisci il tuo testo"
                                value={formData.text}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Vote</label>
                            <input
                                type="number"
                                min={1}
                                max={5}
                                name="vote"
                                className="form-control"
                                placeholder="inserisci il tuo rating"
                                value={formData.vote}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className="btn btn-primary">
                        <button type="submit">Crea recensione!</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
    
}
export default ReviewForm;