import {connection} from '../data/db.js'


function index(req, res) {
//let filteredPosts = arrPosts;
// Se la richiesta contiene un filtro, allora filtriamo i posts
/*if (req.query.title) {
filteredPosts = arrPosts.filter(
post => post.title.includes(req.query.title)
);
}*/
// restituiamo la variabile filteredPosts
// potrebbe essere stata filtrata o contenere il menu-post originale
//res.json(filteredPosts);



//VERSIONE DB MYSQL
const sql = 'SELECT * FROM movies';


connection.query(sql, (err, results) => {

if(err) return res.status(500).json({
    error: "Database query error"
})

res.json(results);
}) 

};

function show(req, res) {
   /* const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = arrPosts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);*/

    //DB MYSQL

    const { id } = req.params;

    const sqlMovies = 'SELECT * FROM movies WHERE id = ?';
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(sqlMovies, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }

        // Se il film non esiste, restituiamo errore 404
        if (results.length === 0) {
            return res.status(404).json({
                status: 404,
                error: "Not found",
                message: "Film non trovato"
            });
        }

        const movie = results[0]; 

        // Secondo query: Ottiengo le recensioni per il film
        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ error: "Database query error" });
            }

            // Aggiungiamo le recensioni all'oggetto film
            movie.reviews = reviewResults;

            // Invia la risposta JSON con il film e le sue recensioni
            res.json(movie);
        });
    });
};

function storeReview(req,res) {
    //recuperare l'id
    const {id} = req.params;

    //recuperare le informazioni del body
    const {text, name, vote} = req.body;

    //preparazione della query
    const sql = 'INSERT INTO reviews (text, name, vote, movie_id) VALUES (?,?,?,?)'

    //eseguiamo la query
    connection.query(sql, [text, name, vote, id],  (err, results) => {
        if(err) return res.status(500).json({
            error: 'databse store error'
        })
        res.status(201)
        res.json({
            message: 'review added ',
            id: results.insertId
        })


    })


}

// esportiamo tutto
export default { index, show, storeReview };