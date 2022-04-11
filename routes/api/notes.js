const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// HTML routes

// get notes page
router.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname,'../../public/notes.html'))
})

// get main page
router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,'../../public/index.html'))
})

module.exports = router;