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

    const {id} = req.params;

    const sql = 'SELECT * FROM movies WHERE id = ?'

    connection.query(sql, [id], (err, results) => {

        if(err) return res.status(500).json({
            error: "Database query error"
        })
        if( results.length === 0 ) return res.status(404).json({
            status:404,
            error: "Not found",
            message: "Film non trovato"
        })
        
        res.json(results[0])
        }) 
};



// esportiamo tutto
export default { index, show  };