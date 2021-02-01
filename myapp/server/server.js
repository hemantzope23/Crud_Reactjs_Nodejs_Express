const express = require('express')
const bodyPaser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud',
});

app.use(bodyPaser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json())

app.get('/api/get', (req,res) =>{
    const sqlSelect ="SELECT * FROM movie_review";
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        res.send(result);
    });
})

app.post("/api/insert", (req, res) =>{
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert ="INSERT INTO `movie_review`(movieName, movieReview) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
    });
});

app.delete('/api/delete/:movieName',(req,res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM `movie_review` WHERE movieName = ?";
    
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    });
});

app.put('/api/update',(req,res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movie_review SET movieReview = ? WHERE movieName = ?";
    
    db.query(sqlUpdate, [review, name], (err, result) => {  
        if (err) console.log(err);
    });
}); 


app.listen(port, () => { 
    console.log("running on port 3001");
});