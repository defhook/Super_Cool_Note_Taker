
const express = require('express');
const app = express();
//const { db } = require('./db/db.json'); 
const PORT = process.env.PORT || 3001; 
const path = require('path');
const fs = require('fs'); 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//setting up express server 
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

//MAKE PUBLIC SERVER 
app.use(express.static('public')); 

//ROUTES 
app.use(apiRoutes);
app.use(htmlRoutes);





app.post("/api/notes", (req,res)=>{
console.log("New Note", req.body);
///NEW NOTE SHULD LOOK LIKE 
// {
//     "title":"Test Title",
//     "text":"Test text", 
//     "id": "001"
// } *

//fs.writeFile()

}); 

app.delete("/api/notes/:id", (req,res)=>{

}); 
// plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column














app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// http://localhost:3001/notes -- notes.html 
// http://localhost:3001/api/notes -- Get all the notes from db.json  
// http://localhost:3001/api/notes -- POST - New the post to db.json 
// http://localhost:3001/api/notes/2 -- DELETE - delete a specific notes from the db.json 
