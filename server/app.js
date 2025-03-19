import express from "express"
import moviesRouter from "./routers/MoviesRouter.js"

const app = express();
import cors from "cors";
const port = 3000;

//middleware cors
app.use(cors({
    origin:process.env.FRONTEND_APP
}))

app.use( express.json())


app.use( "/movies" , moviesRouter )



app.get( "/movies", (req, res) => {
    res.send("Server movie tutto ok")
    })

//attivazione del server
app.listen(port, () =>{
    console.log("Server in funzione sulla porta" + port)
})