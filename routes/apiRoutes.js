const { response } = require('express');
const fs = require('fs');
const { request } = require('http');
const path = require('path');
const router = require('express').Router();

// get all notes
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        response.json(JSON.parse(data));
    })
})

// create a new note
router.post('/api/notes', (req, res) => {
    const newNote = {
        title: request.body.title,
        text: request.body.text,
    }
    return fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSOn.parse(data);
        notes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notes), () => {
            response.json(true);
        })
    })
})

// app.get("/api/notes", (req,res)=>{
//     //reading data from the db.json file 
//     fs.readFile("./db/db.json", "utf8", (error, result)=>{
//         if(error) console.log("Error: ", error);
//         //convert the string result into a JSON friendly format 
//         const allData = JSON.parse(result); 
//          console.log(allData);  
//          //sending JSON object back to the html page 
//          res.json(allData);
//     })
    
    
//     }); 


    module.exports = router;