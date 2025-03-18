import express from "express"
import moviesRouter from "./routers/MoviesRouter.js"

const app = express();
const port = 3000;


app.use( "api/movies" , moviesRouter )

app.use( express.json())

app.get( "/", (req, res) => {
    res.send("Server movie tutto ok")
    })

//attivazione del server
app.listen(port, () =>{
    console.log("Server in funzione sulla porta" + port)
})