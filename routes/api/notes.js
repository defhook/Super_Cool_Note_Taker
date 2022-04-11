const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// api routes

// get all notes
router.get('/api/notes', (request, response) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        response.json(JSON.parse(data));
    })
})

// create a new note
router.post('/api/notes', (request, response) => {
    
    const newNote = {
        title: request.body.title,
        text: request.body.text,
        id: uuidv4()
    }

    return fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes), () => {
            response.json(true);
        })
    })
})


module.exports = router; 