// our server configuration

const express = require('express'); // importing our express module

require('dotenv').config(); // now we can process our .env data

//add cors
var cors = require('cors');

const app = express(); // express instance, can define routes, middleware and etc
const port = 3001; 

app.use(cors());

//one of the http verbs, fetching data from our resource. 
app.get("/", (req, res) => {
    res.send("Movie app is running!");
})

// async request
app.get ("/getMovies", async (req, res) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await response.json();
    res.send(data);


})


app.listen(port, () => {
    console.log("Movie App is listening on port " + port);
})